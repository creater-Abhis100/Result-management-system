import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import {DashService} from '../dash.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-stud',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent implements OnInit {

  constructor(private http:HttpClient,private stud:DashService,private router:Router) { }
  alert:boolean = false
  addstud=new FormGroup(
    {
      Roll_no:new FormControl(''),
      Name:new FormControl(''),
      DOB:new FormControl(''),
      Score:new FormControl('')

    }
  )
    log=[]
    
  ngOnInit(): void {
    this.http.get("http://localhost:3000/loggedin").subscribe((res) => {
      console.warn('res')
      console.warn(res=='')
      if (res=='')
      {
        console.warn(null)
      }
      else{
        this.log = <any>res 
      }
           //console.warn("this.user2")
      console.warn(this.log.length)
      console.warn("Subs")
  
      if (this.log.length===0)
    {
    console.warn("if is working fine")
    this.router.navigate(['login'])
    //console.warn(this.http.get("http://localhost:3000/loggedin"))
    } 
    else{
      console.warn("else is working fine")
      //console.warn(Object.values(this.http.get("http://localhost:3000/loggedin")))
      
    }

      
  })
  }

  collectStud()
  {
    if ((this.addstud.value.Roll_no=='') || (this.addstud.value.Name=='') || (this.addstud.value.DOB=='') || (this.addstud.value.Score=='') || (this.addstud.value.Score >= 100))
    {
      alert("Enter Valid value")
    }
    else{
    this.http.get<any>("http://localhost:3000/Dashboard").subscribe(res=>{
      const user = res.find((a:any) => {
        return a.Roll_no===this.addstud.value.Roll_no
      });
      if (user)
      {
      alert("This roll no. Already exist")
      this.addstud.reset();
      }else{
        this.stud.Save_list(this.addstud.value).subscribe((result:any)=>{
          // console.warn(result)
          this.alert=true;
        })
        this.addstud.reset({})//for making form blank
        this.router.navigate(['list'])
        
      }
})
    }
    //console.warn(this.addstud.value) //FOR CONSOLE TESTING

  }
  closeAlert()
  {
    this.alert=false
  }

} 
