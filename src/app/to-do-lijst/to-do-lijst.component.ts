import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-lijst',
  templateUrl: './to-do-lijst.component.html',
  styleUrls: ['./to-do-lijst.component.css']
})
export class ToDoLijstComponent implements OnInit {

  Lijst: string[] = [];

  constructor() { }

  addToDoList(input: string){
    this.Lijst.push(input);
    
  }
  verwijder(input: number){
   this.Lijst.splice(input,1);
  }

  ngOnInit() {
  }

}
