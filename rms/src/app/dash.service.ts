import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashService {
url = 'http://localhost:3000/Dashboard'
l_url='http://localhost:3000/signupUser'
s_url='http://localhost:3000/stud'
  constructor(private http:HttpClient,private router:Router) { }
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
  get_List()
  {
    console.warn("Working")
    return this.http.get(this.url)
  }

  Save_list(data:any)
  {
    console.warn(data)
    return this.http.post(this.url,data)
  }

  delete_Stud(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

  get_Curr(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  update_Stud(id:any,data:any)
  {
    if (this.log.length===0)
    {
      return this.http.put(`${this.url}/${id}`,data)
    }
    else
    {
    return this.http.put(`${this.url}/${id}`,data)
    }
  }

  login_t(user:any)
  {
    return this.http.post<any>(this.l_url,user)
  }

  login_s(user:any)
  {
    return this.http.post<any>(this.s_url,user)
  }

  treg_t(user:any)
  {
    return this.http.post<any>(this.l_url,user)
  }

  getdata(data:any)
  {
    return this.http.get<any>(this.url,data)
  }
}
