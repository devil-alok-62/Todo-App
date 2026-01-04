"use client";
import React, { useState } from "react";

interface Task {
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [main, setMain] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMain([...main, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (indexToDelete: number) => {
    const updatedTasks = main.filter((_, index) => index !== indexToDelete);
    setMain(updatedTasks);
  };

  let renderedTask: React.ReactNode = <h2>No tasks available</h2>;

  if (main.length > 0) {
    renderedTask = main.map((task, index) => (
      <li
        key={index}
        className="mb-4 p-4 bg-white/10 rounded flex items-center justify-evenly"
      >
        <div className="flex mb-5 w-2/3 justify-between">
          <h3 className="text-2xl font-semibold">{task.title}</h3>-
          <p className="text-lg">{task.description}</p>
        </div>
        <button
          onClick={() => handleDelete(index)}
          className="bg-red-400 text-white px-4 py-2 font-bold rounded"
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      <div className="text-3xl font-bold underline bg-white/10 p-4 rounded-lg flex justify-center items-center m-4">
        <img
          src="/favicon.ico"
          alt="To-Do Icon"
          className="w-16 h-16 animate-bounce"
        />
        <h1>To-Do List Application</h1>
      </div>

      <p className="text-center text-lg">
        Manage your tasks efficiently by adding and deleting them as needed.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-evenly m-4"
      >
        <input
          type="text"
          placeholder="Add a new task"
          className="border px-4 text-2xl py-2 m-8 border-zinc-500 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Add description"
          className="border px-4 text-2xl py-2 border-zinc-500 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded m-4">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-4 bg-slate-200/10 rounded m-4">
        <ul>{renderedTask}</ul>
      </div>
    </div>
  );
};

export default Page;
