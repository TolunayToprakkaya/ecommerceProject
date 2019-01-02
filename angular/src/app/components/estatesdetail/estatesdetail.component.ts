import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-estatesdetail',
  templateUrl: './estatesdetail.component.html',
  styleUrls: ['./estatesdetail.component.css']
})
export class EstatesdetailComponent implements OnInit {

  estate = {};

  constructor(private http: HttpClient, private authService: LoginAuthService, private route: ActivatedRoute) {
    this.http = http;
    this.authService.isLoaggedIn();
  }
  getEstateDetail(id) {
    this.http.get('http://localhost:8080/estates/'+id).subscribe(data => {
      this.estate = data;
    });
  }

  ngOnInit() {
    this.getEstateDetail(this.route.snapshot.params['id']);
  }

}
