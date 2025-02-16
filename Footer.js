import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqus_HkLhTbgaLteu0Jy7pdBT5T6Vn2WWY02hlmdZNrg4Ssv3z" }}
        style={styles.logo}
      />

      <View style={styles.menu}>
        <Text style={styles.boldText}>Home</Text>
        <Text style={styles.boldText}>Solutions</Text>
        <Text style={styles.normalText}>Trade Finances</Text>
        <Text style={styles.normalText}>Import / Export</Text>
        <Text style={styles.normalText}>Supply Chain & Logistics</Text>
        <Text style={styles.boldText}>About Us</Text>
        <Text style={styles.boldText}>How It Works</Text>
        <Text style={styles.boldText}>Contact Us</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        © 2024 by SimplyFI. SimplyFI and the SimplyFI logo are trademarks in the
        United States, Singapore, India and other countries.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    padding: 20,
    marginTop: -100,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  menu: {
    textAlign: "left",
    marginBottom: 40,
  },
  boldText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  normalText: {
    color: "#C0C0C0",
    fontSize: 16,
    marginVertical: 3,
  },
  footer: {
    color: "#A0A0A0",
    fontSize: 12,
    textAlign: "center",
    marginTop: "auto",
    paddingBottom: 10,
  },
});

export default Footer;
