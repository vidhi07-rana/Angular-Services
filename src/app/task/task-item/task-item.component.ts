import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task.model';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  private taskService = inject(TaskService);
  originalStatus!: TaskStatus;
  statusChanged: boolean = false;
  ngOnInit() {
    // Store the original status to compare later
    this.originalStatus = this.task.status;
  }
  

  taskStatus = computed(() => {
    switch (this.task.status) {
      case '':
        return '';
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'DONE':
        return 'Completed';
      default:
        return ;
    }
  });

  // Method to get the select value from the event
  getSelectValue(event: Event): string {
    return (event.target as HTMLSelectElement).value;
  }

  // Method to update the task status
  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';
    switch (status) {
      case '':
        newStatus = '';
        break;
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in_progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.taskService.updateTaskStatus(taskId, newStatus);
    this.task.status = newStatus; // Update the local task status to reflect immediately
    this.statusChanged = this.task.status !== this.originalStatus;

  }

}
