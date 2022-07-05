import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudComponent } from './add-stud/add-stud.component';
import { UpdateStudComponent } from './update-stud/update-stud.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { StudentLComponent } from './student-l/student-l.component';
import { NewTeachComponent } from './new-teach/new-teach.component';
import { DisplayResComponent } from './display-res/display-res.component';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    AddStudComponent,
    UpdateStudComponent,
    LoginComponent,
    ListComponent,
    StudentLComponent,
    NewTeachComponent,
    DisplayResComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
