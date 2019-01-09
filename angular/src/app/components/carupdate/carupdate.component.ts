import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginAuthService} from "../../services/login-auth.service";

@Component({
  selector: 'app-carupdate',
  templateUrl: './carupdate.component.html',
  styleUrls: ['./carupdate.component.css']
})
export class CarupdateComponent implements OnInit {

  public car: any = {};

  constructor(private http: HttpClient, private authService: LoginAuthService, private route: ActivatedRoute) {
    this.http = http;
    this.authService.isLoaggedIn();
  }

  getCarDetail(id) {
    this.http.get('http://localhost:8080/cars/'+id).subscribe(data => {
      this.car = data;
    });
  }

  updateCar(id, car:any){
    car.updatedDate = new Date();
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put('http://localhost:8080/cars/update/'+id,car, {headers: headers}).subscribe();
  }

  ngOnInit() {
    this.getCarDetail(this.route.snapshot.params['id']);
  }

}
