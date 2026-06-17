"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTaskById, updateTask } from "@/app/services/taskService";

export default function EditTask() {
    const { id } = useParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        status: "Pending",
    });

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        try {
            const task = await getTaskById(id as string);

            setFormData({
                title: task.title,
                description: task.description,
                priority: task.priority,
                dueDate: task.dueDate
                    ? task.dueDate.split("T")[0]
                    : "",
                status: task.status,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            await updateTask(
                id as string,
                formData
            );

            alert("Task Updated Successfully");

            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex bg-amber-50 justify-center">
            <div className="flex flex-col bg-white mt-[5%] p-4 w-[50%] rounded-2xl text-center">
                <h1 className="text-4xl font-bold text-amber-900 mb-5">
                    Edit Task
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full border p-2 rounded"
                        required
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full border p-2 rounded"
                        rows={4}
                    />

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="High">
                            High
                        </option>
                        <option value="Medium">
                            Medium
                        </option>
                        <option value="Low">
                            Low
                        </option>
                    </select>

                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="Pending">
                            Pending
                        </option>
                        <option value="Completed">
                            Completed
                        </option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-600"
                    >
                        Update Task
                    </button>
                </form>
            </div>
        </div>
    );
}