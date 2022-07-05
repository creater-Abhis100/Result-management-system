import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DashService } from '../dash.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-l',
  templateUrl: './student-l.component.html',
  styleUrls: ['./student-l.component.css']
})
export class StudentLComponent implements OnInit {

  constructor(private http: HttpClient, private stud: DashService, private router: Router) { }

  Slogindata = new FormGroup(
    {
      Roll_no: new FormControl('', Validators.required),
      DOB: new FormControl('', Validators.required),

    }
  )
  user2 = <any>[];
  ngOnInit(): void {
    this.http.get("http://localhost:3000/stud").subscribe((res) => {
      this.user2 = <any>res      //console.warn("this.user2")
      console.warn(res)
      for (let item of this.user2) {
        console.warn(item)
        this.http.delete('http://localhost:3000/stud/' + item.id).subscribe(res2 => {
          console.warn("Deleted")
        })
      }
    })
  }



  login_s() {
    this.http.get<any>('http://localhost:3000/Dashboard').subscribe(res => {
      const user1 = res.find((a: any) => {
        //console.warn(this.Slogindata.value.Roll_no)
        console.warn(a.id)
        //console.warn(a.Roll_no==this.Slogindata.value.Roll_no && a.DOB==this.Slogindata.value.DOB)
        return a.Roll_no == this.Slogindata.value.Roll_no && a.DOB == this.Slogindata.value.DOB
      });

      if (user1) {
        console.warn("This is user1")
        console.warn(user1)
        alert("Result Found");
        // this.http.delete<any>('http://localhost:3000/stud/${id}',this.Slogindata.value.).subscribe(res1=>
        // {
        //   console.warn(res1)
        // });
        this.http.post<any>('http://localhost:3000/stud', user1).subscribe(res1 => {
        console.warn(res1)
        });
        this.Slogindata.reset();
        this.router.navigate(['display'])
      } else {
        alert("Please Enter Correct input")
      }


      // this.stud.login_t(this.logindata.value).subscribe(
      //   res=>console.log(res),
      //   err=>console.log(err)



    })
  }
  getdata(user1: any) {
    console.warn(user1)
  }
}
function id<T>(arg0: string, id: any) {
  throw new Error('Function not implemented.');
}

