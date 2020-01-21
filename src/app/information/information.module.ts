import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FaqsComponent, 
    HelpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FaqsComponent, 
    HelpComponent,
    ReactiveFormsModule
  ]
})
export class InformationModule { }
