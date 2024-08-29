import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoginService } from "../login.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>([]);
  private loginService = inject(LoginService)
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: ''
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loginService.log('AddED Task With Title: ' + taskData.title + ' ' + 'Description: '+ taskData.description)
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loginService.log('Change task Status: ' + newStatus)
  }
}
