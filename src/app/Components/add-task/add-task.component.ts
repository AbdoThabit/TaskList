import { Component, OnInit } from '@angular/core';
import { ITaskDto } from 'src/app/Models/ItaskDto';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskDto: ITaskDto = {
    title: '',
    description: '',
    type: '',
    created: new Date(),
    userId: '', // Example user ID, replace with actual value
  };
  constructor(private taskService: TaskService) {}

  AddTask() {
    this.taskService
      .AddTask(this.taskDto)
      .subscribe((result) => console.log(result));
  }
}
