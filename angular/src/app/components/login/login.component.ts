import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { LoginAuthService } from "../../services/login-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any = {};

  constructor(private userService: UserService, private router: Router, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
  }

  loginUser(user: any){
    this.userService.loginUser(user).subscribe((response) => {
      if(response){
        if(response.token){
          localStorage.setItem('currentUser', JSON.stringify(response));
          if(response.user.role === 'ADMIN'){
            this.router.navigate(['/admindashboard']);
            document.location.reload(true);
          }else{
            this.router.navigate(['/products']);
            document.location.reload(true);
          }
        }
      }
    });
  }

}
