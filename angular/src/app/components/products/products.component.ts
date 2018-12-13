import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { LoginAuthService } from "../../services/login-auth.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
    this.productService.products().subscribe(data => {
      this.products = data;
    });
  }

}
