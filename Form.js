import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    cname: "",
    email: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <>
 
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formTitle}>Get In Touch</Text>
      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Contact Us</Text>
          
        <TextInput
          style={styles.input}
          placeholder="First name*"
          value={formData.fname}
          onChangeText={(text) => handleChange("First name", text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Last name*"
          value={formData.lname}
          onChangeText={(text) => handleChange("Last name", text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Company name*"
          value={formData.cname}
          onChangeText={(text) => handleChange("Company name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email*"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleChange("Email address", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={formData.message}
          onChangeText={(text) => handleChange("Message", text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#27233a",
    marginTop: 60,

  },
  section: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },


  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#090619",
    borderRadius: 10,
    elevation: 3,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: '#fff',

  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "#fff",
    backgroundColor: "#27233a",
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;