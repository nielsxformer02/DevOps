import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  imgUrl: string;
  options: string[]=[];
  
  constructor() { 
    
    for (let i = 0; i < 152; i++){
      this.options.push("https://mdbootstrap.com/img/Photos/Slides/img%20("+i+").jpg")
      this.imgUrl = this.options[(this.getRandomInt(152)+1)];
    setInterval(()=>  this.imgUrl = this.options[(this.getRandomInt(152)+1)],5000);
    }

}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit() {
  }

}
