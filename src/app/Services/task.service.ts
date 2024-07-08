import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITaskDto } from '../Models/ItaskDto';
import { IUpdateTaskDto } from '../Models/iupdate-task-dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url: string = 'https://localhost:7258';

  constructor(private http: HttpClient) {}
  getAllTasks(): Observable<any> {
    return this.http.get(`${this.url}/GetAllTasks`);
  }
  GetTaskById(taskId: number): Observable<any> {
    return this.http.get(`${this.url}/GetById?taskId=${taskId}`);
  }
  AddTask(taskDto: ITaskDto): Observable<any> {
    return this.http.post(`${this.url}/CreateTask`, taskDto);
  }
  updateTask(taskId: number, updateTaskDto: IUpdateTaskDto) {
    return this.http.post(
      `${this.url}/UpdateTask?taskId=${taskId}`,
      updateTaskDto
    );
  }
  deleteTask(id: number) {
    return this.http.delete(`${this.url}/DeleteTask?taskId=${id}`);
  }
}
