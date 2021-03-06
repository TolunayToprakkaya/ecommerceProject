import {Component, OnInit} from '@angular/core';
import {LoginAuthService} from "./services/login-auth.service";
import { Router } from "@angular/router";
import {UserService} from "./services/user.service";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular';
  public currentstatus: any;

  public loginuser: any = {};
  public user: any = {};
  car = {};

  constructor(private productService: ProductsService, private authService: LoginAuthService, private router: Router, private userService: UserService) {
    this.authService.isLoaggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus => {
      this.currentstatus = currentstatus;
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  searchFunc(searchInput:string) {
    alert(searchInput);
  }

  ngOnInit() {
    this.userService.getUser(this.loginuser.token).subscribe(user => {
      this.user = user;
    }, err => {
      console.log(err);
    });

    this.productService.getCars().subscribe(data => {
      this.car = data;
    });
  }

}
