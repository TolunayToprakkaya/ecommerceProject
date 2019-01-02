import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carsdetail',
  templateUrl: './carsdetail.component.html',
  styleUrls: ['./carsdetail.component.css']
})
export class CarsdetailComponent implements OnInit {

  car = {};

  constructor(private http: HttpClient, private authService: LoginAuthService, private route: ActivatedRoute) {
    this.http = http;
    this.authService.isLoaggedIn();
  }

  getCarDetail(id) {
    this.http.get('http://localhost:8080/cars/'+id).subscribe(data => {
      this.car = data;
    });
  }

  ngOnInit() {
    this.getCarDetail(this.route.snapshot.params['id']);
  }

}
