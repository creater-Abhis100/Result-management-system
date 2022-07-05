import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudComponent} from './add-stud/add-stud.component'
import { UpdateStudComponent } from './update-stud/update-stud.component'
import { LoginComponent } from './login/login.component'
import { ListComponent } from './list/list.component'
import { StudentLComponent } from './student-l/student-l.component';
import { NewTeachComponent } from './new-teach/new-teach.component';
import { DisplayResComponent } from './display-res/display-res.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    component:AddStudComponent,
    path : 'add'
  },
  {
    component:UpdateStudComponent,
    path : 'update/:id'
  },
  {
    component:LoginComponent,
    path : 'login'
  },
  {
    component:ListComponent,
    path : 'list'
  },
  {
    component:StudentLComponent,
    path : 'Slogin'
  },
  {
    component:NewTeachComponent,
    path : 'newtech'
  },
  {
    component:DisplayResComponent,
    path : 'display'
  },
  {
    component:HomePageComponent,
    path : 'Home'
  },
  {
    path : '**',
    redirectTo:'Home',
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
