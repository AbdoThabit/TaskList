import { Component, OnInit } from '@angular/core';
import { IAddUserDto } from './../../Models/iadd-user-dto';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  addUserDto: IAddUserDto = {
    fullName: '',
    userName: '',
    address: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthServiceService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not i');
  }
  onSubmit() {
    this.userService.addUser(this.addUserDto).subscribe(
      (response) => {
        alert('User added successfully');
        this.authService.login(
          response.token,
          response.userName,
          response.roles
        );
        this.router.navigateByUrl(`userTasks`);
      },
      (error) => {
        alert('there is some proplem');
      }
    );
  }
}
