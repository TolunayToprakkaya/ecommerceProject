import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { LoginAuthService } from "../../services/login-auth.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  //Ürünü Kimin Eklediği Belli Olsun Diye
  public loginuser: any = {};
  public userService: any = {};
  //Product Eklemek İçin
  public product: any = {};
  //Car Eklemek İçin
  public car: any = {};
  //Category Dropdownu İçin
  categories: Array<any>;

  constructor(private productService: ProductsService, private authService: LoginAuthService) {
    //Security İçin
    this.authService.isLoaggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.productService.getUser(this.loginuser.token).subscribe(user => {
      this.userService = user;
    }, err => {
      console.log(err);
    });

    this.productService.categories().subscribe(data => {
      this.categories = data;
    });
  }

  saveProduct(product:any, productForm:any, catVal:any){
    product.createDate = new Date();
    const id = this.loginuser.user.id;
    product.user = {id};
    //product.car = {id};
    //product.estate = {id};
    this.onCategorySelected(product, catVal);
    this.productService.saveProduct(product).subscribe((response) => {
      //if(response){
        console.log(response);
        productForm.reset();
      //}
    })
  }

  saveCar(car:any){
    this.productService.saveCar(car).subscribe();
  }

  onCategorySelected(product:any ,catVal: any){
    var id = catVal;
      if(catVal == "70bfd44a-8581-4ce6-b89f-1f2b4386ee46") {
        product.category = {id};
        document.getElementById("markLabel").style.display = "block";
        document.getElementById("mark").style.display = "block";
        document.getElementById("modelLabel").style.display = "block";
        document.getElementById("model").style.display = "block";
        document.getElementById("yearLabel").style.display = "block";
        document.getElementById("year").style.display = "block";
        document.getElementById("fuelLabel").style.display = "block";
        document.getElementById("fuel").style.display = "block";
        document.getElementById("gearLabel").style.display = "block";
        document.getElementById("gear").style.display = "block";
        document.getElementById("kmLabel").style.display = "block";
        document.getElementById("km").style.display = "block";
        document.getElementById("colorLabel").style.display = "block";
        document.getElementById("color").style.display = "block";
        document.getElementById("licensePlateLabel").style.display = "block";
        document.getElementById("licensePlate").style.display = "block";
        document.getElementById("ownerLabel").style.display = "block";
        document.getElementById("owner").style.display = "block";
      }
     else if(catVal == "1cb22d6e-d095-4b42-90c1-6c3be8ba88fb"){
        product.category = {id};
        document.getElementById("markLabel").style.display = "none";
        document.getElementById("mark").style.display = "none";
        document.getElementById("modelLabel").style.display = "none";
        document.getElementById("model").style.display = "none";
        document.getElementById("yearLabel").style.display = "none";
        document.getElementById("year").style.display = "none";
        document.getElementById("fuelLabel").style.display = "none";
        document.getElementById("fuel").style.display = "none";
        document.getElementById("gearLabel").style.display = "none";
        document.getElementById("gear").style.display = "none";
        document.getElementById("kmLabel").style.display = "none";
        document.getElementById("km").style.display = "none";
        document.getElementById("colorLabel").style.display = "none";
        document.getElementById("color").style.display = "none";
        document.getElementById("licensePlateLabel").style.display = "none";
        document.getElementById("licensePlate").style.display = "none";
        document.getElementById("ownerLabel").style.display = "none";
        document.getElementById("owner").style.display = "none";
      }
  }

}
