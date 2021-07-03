import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {
first:any;
values:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addnum(){
    this.values.push({value: ""});
  }
  delete(){
    this.values.pop({value: ""});
  }
}
