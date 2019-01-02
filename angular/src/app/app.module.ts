import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from "ngx-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ProductsComponent } from "./components/products/products.component";
import { NewProductComponent } from './components/new-product/new-product.component';

import { UserService } from "./services/user.service";
import { ProductsService } from "./services/products.service";
import { AuthGuard } from "./auth.guard";
import { LoginAuthService } from "./services/login-auth.service";
import { CarsComponent } from './components/cars/cars.component';
import { EstatesComponent } from './components/estates/estates.component';
import { CarsdetailComponent } from './components/carsdetail/carsdetail.component';
import { EstatesdetailComponent } from './components/estatesdetail/estatesdetail.component';
import { MyProductsComponent } from './components/my-products/my-products.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    ProductsComponent,
    NewProductComponent,
    CarsComponent,
    EstatesComponent,
    CarsdetailComponent,
    EstatesdetailComponent,
    MyProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    ProductsService,
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
