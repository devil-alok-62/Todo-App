"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the new task can be implemented here
    setMain([...main, { title, description }]);
    setTitle("");
    setDescription("");
    console.log(main);
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = main.filter((_, index) => index !== indexToDelete);
    setMain(updatedTasks);
  };

  let renderedTask = <h2>No tasks available</h2>;

  if (main.length > 0) {
    renderedTask = main.map((task, index) => (
      <li
        key={index}
        className="mb-4 p-4 bg-white/10 rounded flex items-center justify-between"
      >
        <div className="flex mb-5 w-2/3 justify-between">
          <h3 className="text-2xl font-semibold">{task.title}</h3>
          <p className="text-lg">{task.description}</p>
        </div>
        <div>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-400 text-white px-4 py-2 font-bold rounded"
          >
            Delete
          </button>
        </div>
      </li>
    ));
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-white/10 p-4 rounded-lg flex justify-center items-center m-4">
        To-Do List Application
      </h1>
      <p className="text-center text-lg">
        Welcome to the To-Do List Application! Here you can manage your tasks
        efficiently and stay organized throughout your day.
      </p>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Add a new task"
          className="border px-4 text-2xl py-2 m-8 border-zinc-500 rounded-lg"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Add description"
          className="border px-4 text-2xl py-2 border-zinc-500 rounded-lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded m-4">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-4 bg-slate-200/10 rounded m-4">
        <ul>{renderedTask}</ul>
      </div>
    </>
  );
};

export default page;
