let idCounter = 1; 

export default class Tasks {
    constructor() {
        this.tasks = [
            { id: '0001', title: 'Fazer o almoço', time: '12:00', status: "Concluída" },
            { id: '0002', title: 'Dormir bem', time: '21:00', status: "A fazer..." },
            { id: '0003', title: 'Estudar', time: '19:30', status: "A fazer..." }
        ];
    }

    get() {
        return this.tasks;
    }

    add(task) {

        const newId = String(idCounter++).padStart(4, '0');
        task.id = newId; 
        this.tasks.push(task);
    }

    update(id, updatedTask) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updatedTask };
        }
    }

    delete(id) {
        console.log(`Excluindo tarefa com ID: ${id}`); 
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}