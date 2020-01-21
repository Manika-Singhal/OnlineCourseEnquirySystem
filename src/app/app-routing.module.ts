import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { AdministratorModule } from './administrator/administrator.module';
import { RepresentativeModule } from './representative/representative.module';
import { InformationModule } from './information/information.module';
import { CoursesModule } from './courses/courses.module';

import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { FaqsComponent } from './information/faqs/faqs.component';
import { HelpComponent } from './information/help/help.component';

const routes: Routes = [
  { path:"", pathMatch:"full", redirectTo:"home" },
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"courses", component:CourseListComponent},
  {path:"faqs", component:FaqsComponent},
  {path:"help", component:HelpComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    MainModule,
    AdministratorModule,
    RepresentativeModule,
    InformationModule,
    CoursesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
