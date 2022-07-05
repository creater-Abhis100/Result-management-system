import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { DashService } from '../dash.service'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-update-stud',
  templateUrl: './update-stud.component.html',
  styleUrls: ['./update-stud.component.css']
})
export class UpdateStudComponent implements OnInit {
  Update_stud = new FormGroup(
    {
      Roll_no: new FormControl(''),
      Name: new FormControl(''),
      DOB: new FormControl(''),
      Score: new FormControl('')
    })
  alert2: boolean = false;
  log=[]
  constructor(private http: HttpClient, private router: ActivatedRoute, private stud: DashService, private route: Router) { }
  ngOnInit(): void{
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
    this.route.navigate(['login'])
    //console.warn(this.http.get("http://localhost:3000/loggedin"))
    } 
    else{
      console.warn("else is working fine")
      //console.warn(Object.values(this.http.get("http://localhost:3000/loggedin")))
      
    }

      
  })
  console.warn("this is roll no.")
    console.warn(this.router.snapshot.params['id'])
    this.stud.get_Curr(this.router.snapshot.params['id']).subscribe((result: any) =>
      this.Update_stud = new FormGroup(
        {
          Roll_no: new FormControl(<any>result['Roll_no']),
          Name: new FormControl(result['Name']),
          DOB: new FormControl(result['DOB']),
          Score: new FormControl(result['Score'])
        }
        )
        
    )
  }

  closeAlert2() {
    this.alert2 = false
  }
  update_Stud() {
    if ((this.Update_stud.value.Roll_no == null) || (this.Update_stud.value.Name == "") || (this.Update_stud.value.DOB == "") || (this.Update_stud.value.Score == null) || (this.Update_stud.value.Score >=100)) {
      alert("Enter Valid Value")
    }
    else {
      if (this.log.length===0)
      {
        console.warn('if cond')
        this.route.navigate(['login'])
      }
      else
      {
      console.warn("This part")
      console.warn("item", this.Update_stud.value)
      this.stud.update_Stud(this.router.snapshot.params['id'], this.Update_stud.value).subscribe(() => {
        console.warn("update done");
        this.alert2 = true;
        this.route.navigate(['list'])
      }
      )
    }
  }
  }
}
