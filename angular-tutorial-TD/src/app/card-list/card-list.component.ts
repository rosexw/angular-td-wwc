import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
