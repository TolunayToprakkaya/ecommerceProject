import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { Subject } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private subject = new Subject<any>();
  isLoaggedIn() {
    if(localStorage.getItem('currentUser')) {
      this.subject.next({status: true});
    }else{
      this.subject.next({status: false});
    }
  }

  clearStatus() {
    this.subject.next();
  }

  getStatus(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
