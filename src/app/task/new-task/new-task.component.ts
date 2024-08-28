import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @ViewChild('taskForm') formEl!: NgForm;

  constructor(private taskService: TaskService) {}

  onAddTask(title: string, description: string) {
    this.taskService.addTask({ title, description });

    if (this.formEl) {
      this.formEl.resetForm(); // Reset both form values and state
    }
  }
}
