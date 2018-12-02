import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from "../../services/login-auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  public loginuser: any = {};
  public user: any = {};

  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoaggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getUser(this.loginuser.token).subscribe(user => {
      this.user = user;
    }, err => {
      console.log(err);
    })
  }

}
