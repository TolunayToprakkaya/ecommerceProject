import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoginAuthService} from "../../services/login-auth.service";
import {ProductsService} from "../../services/products.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-estateupdate',
  templateUrl: './estateupdate.component.html',
  styleUrls: ['./estateupdate.component.css']
})
export class EstateupdateComponent implements OnInit {

  public estate: any = {};

  constructor(private http: HttpClient, private productsService: ProductsService, private authService: LoginAuthService, private route: ActivatedRoute) {
    this.http = http;
    this.authService.isLoaggedIn();
  }

  getEstateDetail(id) {
    this.http.get('http://localhost:8080/estates/'+id).subscribe(data => {
      this.estate = data;
    });
  }

  updateEstate(id, estate:any){
    estate.updatedDate = new Date();
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put('http://localhost:8080/estates/update/'+id, estate, {headers: headers}).subscribe();
  }

  ngOnInit() {
    this.getEstateDetail(this.route.snapshot.params['id']);
  }

}
