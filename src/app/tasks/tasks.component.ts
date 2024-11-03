import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from "./new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  addingTask: boolean = false

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  addTaskClicked() {
    this.addingTask = true
  }

  onCancelButton() {
    this.addingTask = false
  }
  
}
