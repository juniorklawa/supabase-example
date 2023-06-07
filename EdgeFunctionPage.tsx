import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ITodo {
  id: number;
  inserted_at: string;
  todo: string;
  updated_at: string;
}

const EdgeFunctionPage = () => {
  const callEdgeFunction = async () => {
    const url =
      "https://hzrzthugysogcbrrxlai.supabase.co/functions/v1/hello-world";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cnp0aHVneXNvZ2NicnJ4bGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5OTQ5ODMsImV4cCI6MjAwMTU3MDk4M30.Mg3Xn_QcIpWkw3fKpCqzo-NqRCGMaCih6EpHYguAtSU";

    const data = {
      name: "Everaldo",
    };

    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("Success", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={callEdgeFunction} style={styles.button}>
          <Text style={styles.label}>Edge Function</Text>
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

export default EdgeFunctionPage;
