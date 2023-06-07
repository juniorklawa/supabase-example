// @ts-nocheck
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TodosPage")}
          style={styles.button}
        >
          <Text style={styles.label}>Database</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ImagePage")}
          style={styles.button}
        >
          <Text style={styles.label}>File Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EdgeFunctionPage")}
          style={styles.button}
        >
          <Text style={styles.label}>Serverless Functions</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  label: {
    fontSize: 18,
    color: "#fff",
  },
  button: {
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 7,
  },
});

export default HomePage;
