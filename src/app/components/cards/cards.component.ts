import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card, Ploy } from './card';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  dual: boolean = false;

  @ViewChild('firstCard', { static: false }) firstCard!: ElementRef;

  backgroundColor: any = '#c54c21';
  fontColor: any = '#ffffff';


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
    width: 600,
    height: 600,
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

  ngOnInit() {}

  downloadImage() {
    html2canvas(this.firstCard.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'my-image.png';
      link.href = imgData;
      link.click();
    });
  }

  print(style:any){
    console.log(style);
  }
}
