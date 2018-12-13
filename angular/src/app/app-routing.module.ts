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

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  { path: 'userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent , canActivate: [AuthGuard]},
  { path: 'newProduct', component: NewProductComponent , canActivate: [AuthGuard]},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
