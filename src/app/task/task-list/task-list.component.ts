import { Component, inject, signal } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  private taskService = inject(TaskService);

  selectedFilter = signal<string>('all');
  tasks = this.taskService.allTasks; // This is a Signal<Task[]>

  onChangeFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }
}
