import { Component, OnInit } from '@angular/core';
import { Card, Ploy } from './card';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: Card = {
    name: '',
    movement: 0,
    APL: 0,
    GA: 0,
    DF: 0,
    save: 0,
    wounds: 0,
    weapons: undefined,
    abilities : undefined,
    uniqueActions: undefined,
    width:600,
    height:600
  };

  ploys: Ploy[] = [
    {
      factionid:   '',
      killteamid:  '',
      ployid:      '',
      ployname:    '',
      ploytype:    '',
      CP:          '',
      description: '',
    }
  ];

  cssForm = new FormGroup({
    width: new FormControl(600),
    height: new FormControl(800),
  });
  changePloy(event:any){
    this.ploys = event as Ploy[];
  }

  changePloySelect(event:any){
    this.card.ploy = event;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
