import { useState } from "react";

export default function View(props) {
    const [taskStatus, setTaskStatus] = useState(props.status);
    const [newTaskTitle, setNewTaskTitle] = useState(''); 
    const colorOfStatus = taskStatus === 'A fazer...' ? 'brown' : 'green';

    const handleConcluir = () => {
        setTaskStatus("Concluída");
        props.onUpdate(props.id, { status: "Concluída" }); 
    };

    const handleDelete = () => {
        props.onDelete(props.id); 
    };

    const handleAddTask = () => {
        if (newTaskTitle.trim() === '') return; 
        const newTask = { title: newTaskTitle, time: '10:00', status: 'A fazer...' };
        props.onAdd(newTask); 
        setNewTaskTitle(''); 
    };

    return (
      <main>
          <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h4 style={{ color: colorOfStatus }}>{props.title}</h4>
              <p>ID: {props.id}</p>
              <p>Título: {props.title || 'Título não informado'}</p>
              <p>Horário: {props.time || 'Horário não informado'}</p>
              <p>Status: {taskStatus || 'Status não informado'}</p>
              {taskStatus === "A fazer..." && (
                  <button onClick={handleConcluir}>Concluir</button>
              )}
              <button onClick={handleDelete}>Deletar</button>
          </div>
          <div>

              <input 
                  type="text" 
                  value={newTaskTitle} 
                  onChange={(e) => setNewTaskTitle(e.target.value)} 
                  placeholder="Título da nova tarefa" 
              />
              <button onClick={handleAddTask}>Adicionar Tarefa</button>
          </div>
      </main>
    );
}