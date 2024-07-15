import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get(`${this.url}/GetAllTasks`, { headers });
  }
  getUserTasks(): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get(`${this.url}/GetUserTasks`, { headers });
  }
  GetTaskById(taskId: number): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get(`${this.url}/GetById?taskId=${taskId}`, { headers });
  }
  AddTask(taskDto: ITaskDto): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post(`${this.url}/CreateTask`, taskDto, { headers });
  }
  updateTask(taskId: number, updateTaskDto: IUpdateTaskDto) {
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post(
      `${this.url}/UpdateTask?taskId=${taskId}`,
      updateTaskDto,
      { headers }
    );
  }
  deleteTask(id: number) {
    const token = localStorage.getItem('jwtToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(`${this.url}/DeleteTask?taskId=${id}`, { headers });
  }
}
