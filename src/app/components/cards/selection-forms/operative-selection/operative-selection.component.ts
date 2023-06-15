import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Card } from '../../card';
import { allData } from 'src/assets/compendium';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-operative-selection',
  templateUrl: './operative-selection.component.html',
  styleUrls: ['./operative-selection.component.scss'],
})
export class OperativeSelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() type!: string;
  @Input() ploys: any;
  @Input() weaponForm!: FormGroup;
  @Input() allData!: any;
  imp: any;

  constructor(private cardsService: CardsService) {}

  @Input() factions!: any;
  @Input() operatives!: any;
  //killteams[7].fireteams[0].operatives;

  ngOnInit(): void {
    this.weaponForm.get('wOperative')?.valueChanges.subscribe((value) => {
      const card: Card = {
        APL: value.APL,
        DF: value.DF,
        GA: value.GA,
        movement: value.M.substring(0, value.M.indexOf('[')),
        name: value.opname,
        save: value.SV,
        wounds: value.W,
        abilities: value.abilities,
        uniqueActions: value.uniqueactions,
        weapons: value.weapons,
      };

      this.cardsService.updateCard(card);
      console.log(value);
    });

    this.imp = this.allData[2];
  }
}
