import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  cars = {};
  estates = {};
  categories: Array<any>;

  constructor(private http: HttpClient, private productsService: ProductsService, private authService: LoginAuthService, private route: ActivatedRoute) {
    this.http = http;
    this.authService.isLoaggedIn();
  }

  getMyCars(id){
    this.http.get('http://localhost:8080/cars/myProducts/'+id).subscribe(data =>{
       this.cars = data;
    });
  }

  getMyEstates(id){
    this.http.get('http://localhost:8080/estates/myProducts/'+id).subscribe(data =>{
      this.estates = data;
    });
  }

  updateCar = function (id) {
    alert("Update Car")
  };

  updateEstate = function (id) {
    alert("Update Car")
  };

  private headers = new Headers({'Content-Type': 'application/json'});
  deleteCar = function (id) {
    if(confirm("Ürünü Sileceksiniz Emin Misiniz?")){
      const url = `${"http://localhost:8080/cars"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then( ()=>{
          this.getMyCars(this.route.snapshot.params['id']);
        })
    }
  };

  deleteEstate = function (id) {
    if(confirm("Ürünü Sileceksiniz Emin Misiniz?")){
      const url = `${"http://localhost:8080/estates"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then( ()=>{
          this.getMyEstates(this.route.snapshot.params['id']);
        })
    }
  };

  ngOnInit() {
    this.getMyCars(this.route.snapshot.params['id']);
    this.getMyEstates(this.route.snapshot.params['id']);

    this.productsService.categories().subscribe(data => {
      this.categories = data;
    });
  }

  onCategorySelected(catVal: any){
    if(catVal == "70bfd44a-8581-4ce6-b89f-1f2b4386ee46") {
      document.getElementById("carList").style.display = "block";
      document.getElementById("estateList").style.display = "none";
    }
    else if(catVal == "1cb22d6e-d095-4b42-90c1-6c3be8ba88fb"){
      document.getElementById("carList").style.display = "none";
      document.getElementById("estateList").style.display = "block";
    }
  }

}

