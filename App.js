import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Navbar from "./Navbar";
import Home from "./Home";
import Form from "./Form";
import Footer from "./Footer";

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Home />
        <Form />
        <Footer/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090619",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default App;

