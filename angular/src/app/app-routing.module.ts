import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";
import {AdmindashboardComponent} from "./components/admindashboard/admindashboard.component";
import {UserdashboardComponent} from "./components/userdashboard/userdashboard.component";
import { AuthGuard } from "./auth.guard";
import {ProductsComponent} from "./components/products/products.component";
import {NewProductComponent} from "./components/new-product/new-product.component";
import {CarsComponent} from "./components/cars/cars.component";
import {EstatesComponent} from "./components/estates/estates.component";
import {EstatesdetailComponent} from "./components/estatesdetail/estatesdetail.component";
import {CarsdetailComponent} from "./components/carsdetail/carsdetail.component";
import {MyProductsComponent} from "./components/my-products/my-products.component";
import {CarupdateComponent} from "./components/carupdate/carupdate.component";
import {EstateupdateComponent} from "./components/estateupdate/estateupdate.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  { path: 'userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent , canActivate: [AuthGuard]},
  { path: 'cars', component: CarsComponent , canActivate: [AuthGuard]},
  { path: 'estates', component: EstatesComponent , canActivate: [AuthGuard]},
  { path: 'newProduct', component: NewProductComponent , canActivate: [AuthGuard]},
  { path: 'cars/myProducts/:id', component: MyProductsComponent , canActivate: [AuthGuard]},
  { path: 'estates/:id', component: EstatesdetailComponent , canActivate: [AuthGuard]},
  { path: 'cars/:id', component: CarsdetailComponent , canActivate: [AuthGuard]},
  { path: 'estates/update/:id', component: EstateupdateComponent , canActivate: [AuthGuard]},
  { path: 'cars/update/:id', component: CarupdateComponent , canActivate: [AuthGuard]},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
