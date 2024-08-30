import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';

const TaskServiceToken = new InjectionToken('tasks-service-token')

 bootstrapApplication(AppComponent,
   appConfig,)
  .catch((err) => console.error(err));
  // import { bootstrapApplication } from '@angular/platform-browser';
  // import { importProvidersFrom, Inject, InjectionToken } from '@angular/core';
  // import { AppComponent } from './app/app.component';
  // import { TaskService } from './app/task/task.service';
  
  // export const TasksServiceToken = new InjectionToken<TaskService>('task-service-token')
  // bootstrapApplication(AppComponent, {
  //   providers: [
  //     // Here you can provide any services or tokens you need
  //     { provide: TasksServiceToken, useClass: TaskService }
  //   ]
  // })
  // .catch(err => console.error(err));