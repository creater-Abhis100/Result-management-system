import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Router} from '@angular/router';
import { DashService } from '../dash.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {

  constructor( private http:HttpClient,private stud:DashService ,private router:Router) { }
  logindata=new FormGroup(
    {
      Email:new FormControl('', Validators.required) ,
      password:new FormControl('', Validators.required),

    }
  )
  user2=<any>[]

  ngOnInit(): void {
    this.http.get("http://localhost:3000/loggedin").subscribe((res) => {
      this.user2 = <any>res      //console.warn("this.user2")
      console.warn(res)
      for (let item of this.user2) {
        console.warn(item)
        this.http.delete('http://localhost:3000/loggedin/' + item.id).subscribe(res2 => {
          console.warn("Deleted")
        })
      }
    })
  }


  login_t()
  {

    this.http.get<any>("http://localhost:3000/signupUser").subscribe(res=>{
      const user = res.find((a:any) => {
        return a.Email===this.logindata.value.Email && a.password===this.logindata.value.password 
      });
      if (user)
      {
        this.http.post<any>('http://localhost:3000/loggedin', user).subscribe(res1 => {
          console.warn("data is")  
        console.warn(res1)
        });
        localStorage.setItem("token","ab12ab12ab")
      //localStorage.setItem('username',this.logindata.value.Email)
      alert("Login SucessFully!");
      this.logindata.reset();
      this.router.navigate(['list'])
      }else{
        alert("user not found")
      }
})
}
}
