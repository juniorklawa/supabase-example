// @ts-nocheck
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "./supabase";

const ImagePage = () => {
  const [publicUrl, setPublicUrl] = useState(null);

  const uploadImageToSupabase = async () => {
    const document = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      copyToCacheDirectory: true,
    });

    const formData = new FormData();

    formData.append("files", {
      uri: document.uri,
      name: document.name,
      type: document.mimeType,
    });

    const fileName = document.name.split(".")[0];

    await supabase.storage
      .from("my-bucket")
      .upload(fileName, formData, { cacheControl: "3600" });

    const {
      data: { publicUrl },
    } = supabase.storage.from("my-bucket").getPublicUrl(fileName);

    setPublicUrl(publicUrl);
  };

  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Upload Image
        </Text>

        <TouchableOpacity
          onPress={uploadImageToSupabase}
          style={styles.button}
        >
          <Text style={styles.label}>Upload Image</Text>
        </TouchableOpacity>

        <Text>The public url is: {publicUrl}</Text>

        <Image
          style={styles.image}
          source={{ uri: publicUrl }}
        />
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
    marginBottom: 16,
  },
  image: {
    height: 350,
    width: "100%",
    marginTop: 10,
  }
});

export default ImagePage;
