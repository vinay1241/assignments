import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
abc:any;
bd:string="";
  constructor() { }

  ngOnInit(): void {
  }
  fact(){
    this.abc=this.bd;
    console.log(this.abc);

  }

}
