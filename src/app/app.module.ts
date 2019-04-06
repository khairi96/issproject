import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule,
    
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }