import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show Details Of the Course';
  public show2:boolean = false;
  public buttonName2:any = 'Show Details Of the Course';
  public show3:boolean = false;
  public buttonName3:any = 'Show Details of the Course';
  public show4:boolean = false;
  public buttonName4:any = 'Show Details of the Course';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide Details of the Course";
    else
      this.buttonName = "Show Details of the Course";
  }
  toggle2() {
    this.show2= !this.show2;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show2)  
      this.buttonName2 = "Hide Details of the Course";
    else
      this.buttonName2 = "Show Details of the Course";
  }
  toggle3() {
    this.show3 = !this.show3;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show3)  
      this.buttonName3 = "Hide Details of the Course";
    else
      this.buttonName3 = "Show Details of the Course";
  }
  toggle4() {
    this.show4 = !this.show4;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show4)  
      this.buttonName4 = "Hide Details of the Course";
    else
      this.buttonName4 = "Show Details of the Course";
  }

}
