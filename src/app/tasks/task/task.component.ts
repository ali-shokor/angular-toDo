import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
  
  private tasksService = inject(TasksService)
  @Input({ required: true }) task!: Task;
  // @Output() clicked = new EventEmitter()

  // buttonClicked() {
  //   this.clicked.emit(this.task.id)
  // }

  onPressedComplete() {
    this.tasksService.removeTask(this.task.id)
  }

}
