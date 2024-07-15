import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  rolesNum: number = 1;
  constructor() {}
  login(token: string, userName: string, roles: string[]) {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('userName', userName);

    for (let r of roles) {
      localStorage.setItem(`role${this.rolesNum}`, r);
      this.rolesNum++;
    }
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userName');
    for (let x = 1; x <= this.rolesNum; x++) {
      localStorage.removeItem(`role${x}`);
    }
    this.rolesNum = 1;
  }
  isAuthorized(): boolean {
    return localStorage.getItem('jwtToken') != null;
  }
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
