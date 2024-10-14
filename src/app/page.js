"use client"
import Model from "./Model.js";
import View from "./View.js";
import Presenter from "./Presenter.js";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);
    const presenter = new Presenter(new Model());

    useEffect(() => {
        setData(presenter.getAllTasks());
    }, []);

    const handleAddTask = (newTask) => {
        presenter.addTask(newTask);
        setData(presenter.getAllTasks()); 
    };

    const handleDeleteTask = (id) => {
        presenter.deleteTask(id); 
        setData(prevData => prevData.filter(task => task.id !== id)); 
    };

    const handleUpdateTask = (id, updatedTask) => {
        presenter.updateTask(id, updatedTask); 
        setData(presenter.getAllTasks()); 
    };

    return (
        <main>
            <h3>Lista de Tarefas</h3>
            {data.map(task => (
                <View
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    time={task.time}
                    status={task.status}
                    onDelete={handleDeleteTask}
                    onAdd={handleAddTask} 
                    onUpdate={handleUpdateTask} 
                />
            ))}
        </main>
    );
}