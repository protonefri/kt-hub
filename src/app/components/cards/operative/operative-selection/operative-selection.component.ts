import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { allData } from 'src/assets/data';
import { Card } from '../../card/card';

@Component({
  selector: 'app-operative-selection',
  templateUrl: './operative-selection.component.html',
  styleUrls: ['./operative-selection.component.scss']
})
export class OperativeSelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() type!: string;
  @Input() ploys:any;
  @Output() ployEmitter = new EventEmitter<string>();


  constructor() { }
  allData: any = allData;
  imp: any = this.allData[2]

  factions!:any;
  operatives!:any;
  //killteams[7].fireteams[0].operatives;

  ngOnInit(): void {
    console.log(this.allData);
    this.weaponForm.get('wOperative')?.valueChanges.subscribe(value => {
      console.log(value)
      this.card.APL = value.APL;
      this.card.DF = value.DF;
      this.card.GA = value.GA;
      this.card.movement = value.M.slice(0,1);
      this.card.name = value.opname;
      this.card.save = value.SV;
      this.card.wounds = value.W;
      this.card.weapons = value?.weapons;
      this.card.abilities = value?.abilities;
      this.card.uniqueActions = value?.uniqueactions;
    })

    this.weaponForm.get('wFaction')?.valueChanges.subscribe(value => {
      this.factions = value.killteams;
    })
    this.weaponForm.get('wKillTeam')?.valueChanges.subscribe(value => {
      this.operatives = value.fireteams[0]?.operatives;
      this.ploys = value.ploys.strat.concat(value.ploys.tac);
      this.ployEmitter.emit(this.ploys);
    })
    this.weaponForm.get('wPloy')?.valueChanges.subscribe(value => {
      this.card.ploy = value;
    })

  }

  weaponForm = new FormGroup({
    wFaction: new FormControl(),
    wKillTeam: new FormControl(),
    wOperative: new FormControl(),
    wPloy: new FormControl()
  });
}
