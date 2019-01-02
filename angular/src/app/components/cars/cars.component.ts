import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Array<any>;

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
    this.productService.getCars().subscribe(data => {
      this.cars = data;
    });
  }

}
