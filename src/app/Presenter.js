// Presenter.js
export default class Presenter {
    constructor(model) {
        this.model = model;
    }

    getAllTasks() {
        return this.model.getAll();
    }

    addTask(task) {
        this.model.addTask(task);
    }

    updateTask(id, updatedTask) {
        this.model.updateTask(id, updatedTask);
    }

    deleteTask(id) {
        this.model.deleteTask(id);
    }
}