import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Card, Ploy } from './card';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import { allData } from 'src/assets/compendium';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  dual: boolean = false;
  allData: any = allData;
  cardType!: string;
  factions!: any;
  operatives!: any;
  @Output() ployEmitter = new EventEmitter<string>();

  @ViewChild('firstCard', { static: false }) firstCard!: ElementRef;

  backgroundColor: any = '#c54c21';
  fontColor: any = '#ffffff';

  weaponForm = new FormGroup({
    wFaction: new FormControl(),
    wKillTeam: new FormControl(),
    wOperative: new FormControl(),
    wPloy: new FormControl(),
  });

  card: Card = {
    name: '',
    movement: 0,
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

  changePloy(event: any) {
    this.ploys = event as Ploy[];
  }

  changePloySelect(event: any) {
    this.card.ploy = event;
  }

  constructor() {}

  ngOnInit() {
    this.weaponForm.get('wOperative')?.valueChanges.subscribe((value) => {
      console.log(value);
      this.card.APL = value.APL;
      this.card.DF = value.DF;
      this.card.GA = value.GA;
      this.card.movement = value.M.slice(0, 1);
      this.card.name = value.opname;
      this.card.save = value.SV;
      this.card.wounds = value.W;
      this.card.weapons = value?.weapons;
      this.card.abilities = value?.abilities;
      this.card.uniqueActions = value?.uniqueactions;
    });
    this.weaponForm.get('wFaction')?.valueChanges.subscribe((value) => {
      this.factions = value.killteams;
    });
    this.weaponForm.get('wKillTeam')?.valueChanges.subscribe((value) => {
      this.operatives = value.fireteams[0]?.operatives;
      this.ploys = value.ploys.strat.concat(value.ploys.tac);
      //this.ployEmitter.emit(this.ploys);
    });


  }

  downloadImage() {
    html2canvas(this.firstCard.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'my-image.png';
      link.href = imgData;
      link.click();
    });
  }

  typeSelect(value: any) {
    this.cardType = value;
  }
}
