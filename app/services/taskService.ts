'use client';
const API_URL = 'http://localhost:5000/api/tasks';

export const createTask = async (task: any) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const getTask = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const getTaskById = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch task");
    }

    return res.json();
};

export const updateTask = async (
    id: string,
    taskData: any
) => {
    const res = await fetch(
        `${API_URL}/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to update task");
    }

    return res.json();
};

export const deleteTask = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    return response.json();
};

export const markAsRead = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}/complete`, {
        method: 'PATCH',
    });
    return response.json();
};
