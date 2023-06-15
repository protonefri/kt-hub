import { Injectable } from '@angular/core';
import { Card, Ploy } from '../components/cards/card';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  card: Card = {
    name: '',
    movement: '0',
    APL: 0,
    GA: 0,
    DF: 0,
    save: 0,
    wounds: 0,
    weapons: undefined,
    abilities: undefined,
    uniqueActions: undefined,
    width: 630,
    height: 880,
  };

  ploys: Ploy[] = [
    {
      factionid: '',
      killteamid: '',
      ployid: '',
      ployname: '',
      ploytype: '',
      CP: '',
      description: '',
    },
  ];

  cssForm = new FormGroup({
    width: new FormControl(600),
    height: new FormControl(800),
  });

  weaponForm = new FormGroup({
    wFaction: new FormControl(),
    wKillTeam: new FormControl(),
    wOperative: new FormControl(),
    wPloy: new FormControl(),
  });

  operative!: any;

  card$ = new BehaviorSubject<Card>(this.card);
  operative$!: BehaviorSubject<any>;
  ploys$ = new BehaviorSubject<Ploy[]>(this.ploys);
  weaponForm$ = new BehaviorSubject<FormGroup>(this.weaponForm);

  constructor() {}

  updateCard(selectedCard: Card) {
    this.card = {
      ...this.card,
      ...selectedCard
    }
    this.card$.next(this.card);
  }

  updateOperative(operative: any) {
    this.operative = operative;
    this.operative$.next(operative);
  }
}
