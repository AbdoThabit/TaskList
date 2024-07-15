import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateTaskDto } from 'src/app/Models/iupdate-task-dto';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}
  taskId: number = 0;
  upateTaskDto: IUpdateTaskDto = {
    title: '',
    description: '',
    type: '',
    created: new Date(),
  };
  ngOnInit(): void {
    this.getId();
    this.getTaskData();
  }
  getId() {
    this.taskId = Number(this.activedRoute.snapshot.paramMap.get('id'));
  }
  getTaskData() {
    this.taskService
      .GetTaskById(this.taskId)
      .subscribe((t) => (this.upateTaskDto = t));
  }
  updateTask() {
    this.taskService
      .updateTask(this.taskId, this.upateTaskDto)
      .subscribe((t) => console.log(t));
    this.router.navigateByUrl('/tasks');
  }
}
