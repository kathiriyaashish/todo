"use client";
import React, { useState } from "react";
import { createTask } from "../services/taskService";

export default () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        status: "Pending",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        try {
            e.preventDefault();
            await createTask(formData);
            alert("Task added");

            setFormData({
                title: "",
                description: "",
                priority: "Medium",
                dueDate: "",
                status: "Pending",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col bg-white mt-[5%] p-4 w-auto rounded-2xl text-center">
            <h1 className="text-4xl font-bold text-amber-900 ">
                Add Task
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow"
            >
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="border p-2 rounded"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 rounded"
                />

                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-amber-700 text-white p-2 rounded"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}