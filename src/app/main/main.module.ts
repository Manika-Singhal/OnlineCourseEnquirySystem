import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ContactComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ]
  

})
export class MainModule { }
