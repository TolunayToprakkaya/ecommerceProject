import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { LoginAuthService } from "../../services/login-auth.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cars: Array<any>;
  estates: Array<any>;

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    this.authService.isLoaggedIn();
  }

  ngOnInit() {
    this.productService.getCars().subscribe(data => {
      for(let i=1 ; i<=data.length ; i++){
        this.cars = data;
      }
    });

    this.productService.getEstates().subscribe(data => {
      for(let i=1 ; i<=data.length ; i++){
        this.estates = data;
      }
    });
  }

}
