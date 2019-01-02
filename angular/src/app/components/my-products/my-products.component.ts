import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
  }

}
