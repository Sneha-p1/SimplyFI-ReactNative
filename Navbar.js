import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Hamburger icon

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqus_HkLhTbgaLteu0Jy7pdBT5T6Vn2WWY02hlmdZNrg4Ssv3z",
        }}
        style={styles.logo}
      />

      {/* Show Navigation Links only on large screens */}
      {width > 600 ? (
        <View style={styles.navLinks}>
          <TouchableOpacity style={styles.activeLink}>
            <Text style={styles.activeText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navText}>Solutions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navText}>How It Works</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Show Menu Icon on small screens
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      )}

      {/* Modal for Small Screen Navigation */}
      <Modal visible={menuVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeButton}>
              <Icon name="x" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.modalText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.modalText}>Solutions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.modalText}>How It Works</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.modalText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a1a2e",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "#ffffff",
    fontSize: 16,
    marginHorizontal: 15,
  },
  activeLink: {
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  activeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1a1a2e",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  modalText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Navbar;

