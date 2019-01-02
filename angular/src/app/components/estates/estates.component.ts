import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.css']
})
export class EstatesComponent implements OnInit {

  estates: Array<any>;

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
    this.productService.getEstates().subscribe(data => {
      this.estates = data;
    });
  }

}
