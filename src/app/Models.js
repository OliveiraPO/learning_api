// Model.js
import Tasks from "./Tasks";

export default class Model {
    constructor() {
        this.tasks = new Tasks();
    }

    getAll() {
        return this.tasks.get();
    }

    getId(id) {
        return this.tasks.get().find(e => e.id === id);
    }

    addTask(task) {
        this.tasks.add(task);
    }

    updateTask(id, updatedTask) {
        this.tasks.update(id, updatedTask);
    }

    deleteTask(id) {
        this.tasks.delete(id);
    }
}