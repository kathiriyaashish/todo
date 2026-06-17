'use client';
const API_URL = 'https://todobackend-ib6n.onrender.com/api/tasks';

export const createTask = async (task: any) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const getTask = async () => {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const getTaskById = async (id: string) => {
    try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch task');
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const updateTask = async (id: string, taskData: any) => {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!res.ok) {
            throw new Error('Failed to update task');
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const markAsRead = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/${id}/complete`, {
            method: 'PATCH',
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

