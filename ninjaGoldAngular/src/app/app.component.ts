import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  gold = 0;
  logs = [];
  constructor(private _httpService: HttpService) { }


  ngOnInit() {


  }
  farmPressed(){
    let prize = Math.floor(Math.random() * 4) + 2;
    this.logs.push("You earned " + prize + " gold at the farm!");
    this.gold += prize;

  }
  cavePressed() {
    let prize = Math.floor(Math.random() * 6) + 5;
    this.logs.push("You earned " + prize + " gold at the cave!");
    this.gold += prize;
  }
  housePressed() {
    let prize = Math.floor(Math.random() * 9) + 7;
    this.logs.push("You earned " + prize + " gold at the house!");
    this.gold += prize;
  }
  casinoPressed() {
    let prize = Math.floor(Math.random() * 201) - 100;
    this.logs.push("You earned " + prize + " gold at the casino!");
    this.gold += prize;
  }

}
