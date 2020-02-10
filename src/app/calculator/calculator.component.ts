import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  counter: number = 0;
  xpos: number;
  ypos: number;
  constructor() { }

  ngOnInit() {
  }
  setCounter(x:number){
    this.counter = x;
  }
  DoSomething(event: MouseEvent): void {
    this.xpos = event.clientX;
    this.ypos = event.clientY;
  }
  increment(){
    this.counter++;
  }

}
