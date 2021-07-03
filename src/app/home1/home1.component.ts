import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
@Input ('ab') ab:any;
datay:any;

  constructor() { }

  ngOnInit(): void {
    this.datay=this.ab;
  
  }
  

}
