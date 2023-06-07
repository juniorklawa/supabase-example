// @ts-nocheck
import { supabase } from "./supabase";

const getTodos = async () => {
  const todos = await supabase.from("todos").select("*");
  return todos;
};

const addTodo = async (todo: string) => {
  const response = await supabase.from("todos").insert({ todo }).select();

  return response.data[0];
};

const deleteTodo = async (id: number) => {
  const deletedTodo = await supabase.from("todos").delete().match({ id });
  return deletedTodo;
};

const updateTodo = async (id: number, todo: string) => {
  const updatedTodo = await supabase
    .from("todos")
    .update({ todo })
    .match({ id });
  return updatedTodo;
};

export default { getTodos, addTodo, deleteTodo, updateTodo };
