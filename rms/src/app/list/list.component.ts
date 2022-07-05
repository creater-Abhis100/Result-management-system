import { Component, OnInit } from '@angular/core';
import {DashService} from '../dash.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dash:DashService,private router:Router,private http:HttpClient) { }
  collection = <any>[];
  alert1:boolean = false
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
  console.warn(this.log.length)

    this.dash.get_List().subscribe((result)=>
    {
      console.warn(result);
      this.collection=<any>result;
    })
    console.warn(this.dash.get_List())
  }
delete_Stud(item:any)
{
  // console.warn(item)
  this.collection.splice(item-1,1)
  this.dash.delete_Stud(item).subscribe((result)=>
  {
    console.warn(result)
    this.alert1=true
  })
}
closeAlert1()
{
  this.alert1=false
}
logout()
{
  localStorage.clear()
}

}
