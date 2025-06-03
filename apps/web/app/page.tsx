"use client";
import { trpc } from "../trpc/client";

export default function Home() {
  const { data } = trpc.todos.getAllTodos.useQuery();
  console.log("Data", data);
  return (
    <div>
      <h1 className="text-red-500 text-6xl">Welcome to the Home Page</h1>
      <p>This is the main entry point of the application.</p>
    </div>
  );
}
