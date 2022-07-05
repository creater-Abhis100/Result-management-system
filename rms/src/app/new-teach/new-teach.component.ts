import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DashService } from '../dash.service';
import { HttpClient } from '@angular/common/http';
import { json } from 'express';

@Component({
  selector: 'app-new-teach',
  templateUrl: './new-teach.component.html',
  styleUrls: ['./new-teach.component.css']
})
export class NewTeachComponent implements OnInit {

  constructor(private http: HttpClient, private stud: DashService, private router: Router) { }
  Tregdata = new FormGroup(
    {
      Email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    }
  )
  ngOnInit(): void {
  }
  Treg_t() {
    if (this.Tregdata.value.Email=='' || this.Tregdata.value.password=='')
    {
      alert("Please enter Some value")
    }
    else{
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(res => {
      const user = res.find((a: any) => {
        return a.Email === this.Tregdata.value.Email
      });
      if (user) {
        alert("user Already exist")
        
      } else {
        console.warn("this is new teach")
        this.http.post<any>("http://localhost:3000/signupUser", this.Tregdata.value).subscribe((res) => {
          console.warn(this.Tregdata.value)
          alert("Signup SucessFull");
          this.Tregdata.reset();
          this.router.navigate(['login'])
          // this.stud.Treg_t(this.Tregdata.value).subscribe(
          //   res=>console.log(res),
          //   err=>console.log(err)

        })

      }



    }
  
    )}}
}
