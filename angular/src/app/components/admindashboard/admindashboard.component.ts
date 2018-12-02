import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from "../../services/login-auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public loginuser: any = {};
  public users: any = [];

  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoaggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllUser(this.loginuser.token).subscribe(users => {
      this.users = users;
    })
  }

}
