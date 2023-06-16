import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Card, Ploy } from './card';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import { allData } from 'src/assets/compendium';
import { CardsService } from 'src/app/services/cards.service';
import { backgroundImages } from './cards-config';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @ViewChild('firstCard', { static: false }) firstCard!: ElementRef;

  dual: boolean = false;
  allData: any = allData;
  cardType!: string;
  factions!: any;
  operatives!: any;

  @Output() ployEmitter = new EventEmitter<string>();
  backgroundImages = backgroundImages;

  backgroundColor: any = '#c54c21';
  fontColor: any = '#ffffff';

  weaponForm!: FormGroup;

  card!: Card;
  ploys!: Ploy[];
  equipment!: any;


  cssForm!: FormGroup;

  constructor(private cardsService: CardsService) {}

  changePloy(event: any) {
    this.ploys = event as Ploy[];
  }

  changePloySelect(event: any) {
    this.card.ploy = event;
  }

  changeEquipment(event:any){
    this.card.equipment = event;
    console.log(this.card.equipment)
  }

  ngOnInit() {
    this.cardsService.card$.subscribe({
      next: (data) => {
        this.card = data;
        console.log(this.allData)
      },
    });

    this.cardsService.weaponForm$.subscribe({
      next: (data) => {
        this.weaponForm = data;
      },
    });

    this.weaponForm.get('wKillTeam')?.valueChanges.subscribe((value) => {
      this.operatives = value.fireteams[0]?.operatives;
      this.ploys = value.ploys.strat.concat(value.ploys.tac);
      this.equipment = value.equipments.filter((item:any) => item.eqcategory === "Equipment");
      console.log(this.equipment);
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

  updateBckg(event:any){
    this.cardsService.updateBckg(event.value)
  }
}
