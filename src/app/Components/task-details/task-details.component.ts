import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../Services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  taskId: number = 0;
  task: any = {};
  constructor(
    private taskService: TaskService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getTask();
    console.log(this.task);
  }
  getTask() {
    this.taskId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this,
      this.taskService
        .GetTaskById(this.taskId)
        .subscribe((t) => (this.task = t));
  }
}
