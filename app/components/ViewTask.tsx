'use client';

import { useEffect, useState } from 'react';
import { deleteTask, getTask, markAsRead } from '../services/taskService';
import { useRouter } from 'next/navigation';

export default function ViewTask() {
    const [tasks, setTasks] = useState<any[]>([]);
    const router = useRouter();
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const fetchTask = async () => {
        try {
            const data = await getTask();
            setTasks(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    const handleComplete = async (task: any) => {
        if (!task.dueDate) {
            alert("Task Can't Completed. Duew Date is Required");
            return;
        }
        if (!task.description || task.description.trim().length < 20) {
            alert('Task Description must be at least 20 characters long.');
            return;
        }
        try {
            await markAsRead(task._id);
            fetchTask();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteTask(id);
            fetchTask();
        } catch (error) {
            console.log(error);
        }
    };

    const filteredTask = tasks.filter((task) => {
        const priorityMatch = !priority || task.priority === priority;
        const statusMatch = !status || task.status === status;
        return priorityMatch && statusMatch;
    });
    return (
        <div className="flex flex-col bg-white mt-[5%] p-4 rounded-2xl text-center w-full">
            <h1 className="text-4xl font-bold text-amber-900 ">View Task</h1>
            <select
                className="border p-2 rounded"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select
                className="border p-2 rounded"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <div className="flex w-full justify-center">
                {filteredTask.length > 0 ? (
                    filteredTask.map((task) => (
                        <div
                            key={task._id}
                            className="w-full justify-around items-center bg-white shadow p-4 rounded flex flex-row"
                        >
                            <div className="flex flex-col">
                                <h2 className="font-bold">
                                    {' '}
                                    Title : {task.title}{' '}
                                </h2>

                                <p> Description : {task.description}</p>

                                <p>Priority: {task.priority}</p>

                                <p>Status: {task.status}</p>
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                <button
                                    onClick={() => handleComplete(task)}
                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                >
                                    Complete
                                </button>
                                <button
                                    onClick={() =>
                                        router.push(`/edit-task/${task._id}`)
                                    }
                                    className="bg-orange-600 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center">
                        <h6 className="text-2xl w-full rounded m-2 font-bold mt-10 border-2 p-3 self-center">
                            No Task Found
                        </h6>
                    </div>
                )}
            </div>
        </div>
    );
}
