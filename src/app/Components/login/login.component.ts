import { Component } from '@angular/core';
import { ILogDto } from 'src/app/Models/ilog-dto';
import { UserService } from 'src/app/Services/user.service';
import { AuthServiceService } from './../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginDto: ILogDto = {
    Email: '',
    PassWord: '',
  };
  constructor(
    private userService: UserService,
    private authServiceService: AuthServiceService,
    private router: Router
  ) {}

  onSubmit() {
    this.userService.Login(this.LoginDto).subscribe(
      (response) => {
        this.authServiceService.login(
          response.token,
          response.Username,
          response.roles
        );
        this.router.navigate(['/userTasks']);
      },
      (error) => {
        alert(`the email or passwor dose not match`);
      }
    );
  }
}
