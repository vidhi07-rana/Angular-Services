import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TaskListComponent } from "./task/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviceAng';
}
