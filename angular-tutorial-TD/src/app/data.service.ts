import { Injectable } from '@angular/core';

import { CARDS } from './mock-data';
import { Card } from './card';

@Injectable()
export class DataService {

  constructor() { }

  getCards(): Card[]{
    return CARDS;
  }

  getCardById(id:number){
    return CARDS.find(card => card.id === id);
  }
}
