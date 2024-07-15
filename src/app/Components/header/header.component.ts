import { Component } from '@angular/core';
import { IAddUserDto } from './../../Models/iadd-user-dto';
import { AuthServiceService } from './../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  alreadyLoggedIn() {
    return this.authService.isAuthorized();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl(`login`);
  }
}
