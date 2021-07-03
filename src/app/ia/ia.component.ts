import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent implements OnInit {
num:any=[2,3,10,15,26,35,50,63];
matcch:any;
best:any;
  constructor() { }

  ngOnInit(): void {
  }
  fetchnum(){
    
    let b=this.matcch;
    if(b<=this.num.length){
    this.best=this.num[b-1];
  }
else{
  this.best="wrong input";
}
}

}
