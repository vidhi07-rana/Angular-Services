import { Component, Inject } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, TaskItemComponent, TaskListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  // providers:[TaskService] this service wil only available in task component and it child if e write like this 
})
export class TaskComponent {
// constructor(@Inject(TaskService) private taskService : TaskService){

// }
}
