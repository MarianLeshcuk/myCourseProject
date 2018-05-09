import { Task } from "../models/task.model";


export class TaskService {
    private employers: Task[] = [];

    getEmployers(): Task[] {
        return this.employers;
    }

    addEmployer(employer: Task) {
        this.employers.push(employer);
    }

    deletEmployer(employer: Task) {
        let i = this.employers.indexOf(employer);
        if(i > -1) {
            this.employers.splice(i, 1);
        }
    }
}