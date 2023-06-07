// @ts-nocheck
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "./supabase";
import TodosPage from "./TodosPage";
import ImagePage from "./ImagePage";
import EdgeFunctionPage from "./EdgeFunctionPage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        navigation.navigate("HomePage");
      } else {
        navigation.navigate("LoginPage");
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="TodosPage" component={TodosPage} />
      <Stack.Screen name="ImagePage" component={ImagePage} />
      <Stack.Screen name="EdgeFunctionPage" component={EdgeFunctionPage} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
