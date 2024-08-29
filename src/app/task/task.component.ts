import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, TaskItemComponent, TaskListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
