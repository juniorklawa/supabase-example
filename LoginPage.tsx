import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "./supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_, session) => {
      console.log(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    height: 40,
    width: 350,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
});
