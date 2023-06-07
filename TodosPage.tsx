// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import todoApi from "./todoApi";

export interface ITodo {
  id: number;
  inserted_at: string;
  todo: string;
  updated_at: string;
}

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState("");

  const getTodos = async () => {
    const { data } = await todoApi.getTodos();

    setTodos(data);
  };

  const addTodo = async () => {
    if (!text) return;

    const newTodo = await todoApi.addTodo(text);

    console.log(newTodo);

    setTodos((prevState) => [...prevState, newTodo]);
    setText("");
  };

  const removeTodo = async (id: number) => {
    await todoApi.deleteTodo(id);

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Todo list
        </Text>
        {todos.map(({ id, todo }) => (
          <TouchableOpacity
            onLongPress={() => removeTodo(id)}
            key={id}
            style={{
              backgroundColor: "#64b5f6",
              padding: 10,
              marginTop: 10,
              borderRadius: 7,
            }}
          >
            <Text>{todo}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 10, padding: 16 }}>
        <TextInput
          value={text}
          onChangeText={(inputText) => setText(inputText)}
          keyboardType="default"
          placeholder="Add..."
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            width: "100%",
          }}
        />
        <TouchableOpacity
          onPress={addTodo}
          style={{
            backgroundColor: "#64b5f6",
            padding: 10,
            marginTop: 10,
            borderRadius: 7,
          }}
        >
          <Text style={{ textAlign: "center" }}>Add todo</Text>
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

export default TodosPage;
