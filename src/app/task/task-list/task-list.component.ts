import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  private taskService = inject(TaskService);

  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.taskService.allTasks();
      case 'open':
        return this.taskService.allTasks().filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService.allTasks().filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.taskService.allTasks().filter(task => task.status === 'DONE');
      default :
        return this.taskService.allTasks();
    }
  });

  onChangeFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }
}
