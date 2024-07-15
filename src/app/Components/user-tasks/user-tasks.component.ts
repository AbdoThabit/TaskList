import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css'],
})
export class UserTasksComponent implements OnInit {
  tasks: any[] = [];
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks(): void {
    this.taskService
      .getUserTasks()
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
