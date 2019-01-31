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
  //Car Eklemek İçin
  public car: any = {};
  //Estate Eklemek İçin
  public estate: any = {};
  //Category Dropdownu İçin
  categories: Array<any>;
  //File Upload
  public userFile: any = File;

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
/*
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
    });
  }
*/
  saveCar(car:any, estate:any,productForm:any, catVal:any){
    car.createDate = new Date();
    const id = this.loginuser.user.id;
    car.user = {id};
    this.onCategorySelected(car, estate,catVal);
    this.productService.saveCar(car).subscribe((response) => {
      console.log(response);
      productForm.reset();
    });
  }

  saveEstate(car:any, estate:any,productForm:any, catVal:any){
    estate.createDate = new Date();
    //this.onSelectFile(event);
    const id = this.loginuser.user.id;
    estate.user = {id};
    this.onCategorySelected(car, estate,catVal);
    this.productService.saveEstate(estate).subscribe((response) => {
      console.log(response);
      productForm.reset();
    });
  }

  onSelectFile(event){
    const file = event.target.files[0];
    this.userFile = file;
  }

  onCategorySelected(car:any, estate:any ,catVal: any){
    var id = catVal;
      if(catVal == "70bfd44a-8581-4ce6-b89f-1f2b4386ee46") {
        car.category = {id};
        document.getElementById("estateTitleLabel").style.display = "none";
        document.getElementById("estateTitle").style.display = "none";
        document.getElementById("estatePriceLabel").style.display = "none";
        document.getElementById("estatePrice").style.display = "none";
        document.getElementById("estateAddressLabel").style.display = "none";
        document.getElementById("estateAddress").style.display = "none";
        document.getElementById("estateExplanationLabel").style.display = "none";
        document.getElementById("estateExplanation").style.display = "none";
        document.getElementById("estateTypeLabel").style.display = "none";
        document.getElementById("estateType").style.display = "none";
        document.getElementById("estateM2Label").style.display = "none";
        document.getElementById("estateM2").style.display = "none";
        document.getElementById("estateRoomCountLabel").style.display = "none";
        document.getElementById("estateRoomCount").style.display = "none";
        document.getElementById("estateFloorLabel").style.display = "none";
        document.getElementById("estateFloor").style.display = "none";
        document.getElementById("estateHeatingLabel").style.display = "none";
        document.getElementById("estateHeating").style.display = "none";
        document.getElementById("estateBathroomCountLabel").style.display = "none";
        document.getElementById("estateBathroomCount").style.display = "none";
        document.getElementById("estateBalconyLabel").style.display = "none";
        document.getElementById("estateBalcony").style.display = "none";
        document.getElementById("estateOwnerLabel").style.display = "none";
        document.getElementById("estateOwner").style.display = "none";

        document.getElementById("carTitleLabel").style.display = "block";
        document.getElementById("carTitle").style.display = "block";
        document.getElementById("carPriceLabel").style.display = "block";
        document.getElementById("carPrice").style.display = "block";
        document.getElementById("carAddressLabel").style.display = "block";
        document.getElementById("carAddress").style.display = "block";
        document.getElementById("carExplanationLabel").style.display = "block";
        document.getElementById("carExplanation").style.display = "block";
        document.getElementById("carImageLabel").style.display = "block";
        document.getElementById("carImage").style.display = "block";
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
        document.getElementById("carSubmit").style.display = "block";
        document.getElementById("estateSubmit").style.display = "none";
      }
     else if(catVal == "1cb22d6e-d095-4b42-90c1-6c3be8ba88fb"){
        estate.category = {id};
        document.getElementById("estateTitleLabel").style.display = "block";
        document.getElementById("estateTitle").style.display = "block";
        document.getElementById("estatePriceLabel").style.display = "block";
        document.getElementById("estatePrice").style.display = "block";
        document.getElementById("estateAddressLabel").style.display = "block";
        document.getElementById("estateAddress").style.display = "block";
        document.getElementById("estateExplanationLabel").style.display = "block";
        document.getElementById("estateExplanation").style.display = "block";
        document.getElementById("estateTypeLabel").style.display = "block";
        document.getElementById("estateType").style.display = "block";
        document.getElementById("estateM2Label").style.display = "block";
        document.getElementById("estateM2").style.display = "block";
        document.getElementById("estateRoomCountLabel").style.display = "block";
        document.getElementById("estateRoomCount").style.display = "block";
        document.getElementById("estateFloorLabel").style.display = "block";
        document.getElementById("estateFloor").style.display = "block";
        document.getElementById("estateHeatingLabel").style.display = "block";
        document.getElementById("estateHeating").style.display = "block";
        document.getElementById("estateBathroomCountLabel").style.display = "block";
        document.getElementById("estateBathroomCount").style.display = "block";
        document.getElementById("estateBalconyLabel").style.display = "block";
        document.getElementById("estateBalcony").style.display = "block";
        document.getElementById("estateOwnerLabel").style.display = "block";
        document.getElementById("estateOwner").style.display = "block";


        document.getElementById("carTitleLabel").style.display = "none";
        document.getElementById("carTitle").style.display = "none";
        document.getElementById("carPriceLabel").style.display = "none";
        document.getElementById("carPrice").style.display = "none";
        document.getElementById("carAddressLabel").style.display = "none";
        document.getElementById("carAddress").style.display = "none";
        document.getElementById("carExplanationLabel").style.display = "none";
        document.getElementById("carExplanation").style.display = "none";
        document.getElementById("carImageLabel").style.display = "none";
        document.getElementById("carImage").style.display = "none";
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
        document.getElementById("carSubmit").style.display = "none";
        document.getElementById("estateSubmit").style.display = "block";
      }
  }

}
