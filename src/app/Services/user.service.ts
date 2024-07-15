import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddUserDto } from './../Models/iadd-user-dto';
import { Observable } from 'rxjs';
import { ILogDto } from '../Models/ilog-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://localhost:7258/';
  constructor(private http: HttpClient) {}
  addUser(addUserDto: IAddUserDto): Observable<any> {
    return this.http.post(`${this.url}Registration`, addUserDto);
  }
  Login(LogInDto: ILogDto): Observable<any> {
    return this.http.post(`${this.url}login`, LogInDto);
  }
}
