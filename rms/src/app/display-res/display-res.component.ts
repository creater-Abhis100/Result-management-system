import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from '../dash.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-res',
  templateUrl: './display-res.component.html',
  styleUrls: ['./display-res.component.css']
})
export class DisplayResComponent implements OnInit {

  constructor( private http:HttpClient,private stud:DashService ,private router:Router) { }
  user1=<any>[];
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/stud").subscribe((res)=>{
      console.warn(res)
      this.user1 = <any>res
})

  }


}
