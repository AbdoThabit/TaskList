import { Component, OnInit } from '@angular/core';

import { TaskService } from './../../Services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: any[] = [];
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks(): void {
    this.taskService
      .getAllTasks()
      .subscribe((t) => (console.log(t), (this.tasks = t)));
  }
  TaskDetails(id: number): void {
    this.router.navigateByUrl(`taskDetails/${id}`);
  }
  UpdateTask(id: number): void {
    this.router.navigateByUrl(`updateTask/${id}`);
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((result) => console.log(result));
  }
}
