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

  selectionForm!: FormGroup;
  cssForm!: FormGroup;

  card!: Card;
  ploys!: Ploy[];
  equipment!: any;
  tacops!: any;

  constructor(private cardsService: CardsService) {}

  changePloy(event: any) {
    this.ploys = event as Ploy[];
  }

  changePloySelect(event: any) {
    this.card.ploy = event;
  }

  changeEquipment(event: any) {
    this.card.equipment = event;
  }

  changeTacops(event: any) {
    this.card.tacops = event;
  }

  ngOnInit() {
    this.cardsService.card$.subscribe({
      next: (data) => {
        this.card = data;
      },
    });

    this.cardsService.weaponForm$.subscribe({
      next: (data) => {
        this.selectionForm = data;
      },
    });

    this.selectionForm.get('wFaction')?.valueChanges.subscribe((value) =>{
      this.selectionForm.get('wKillTeam')?.enable();
    })


    this.selectionForm.get('wKillTeam')?.valueChanges.subscribe((value) => {
      if(value !=''){
        this.selectionForm.get('wCardType')?.enable();
        this.selectionForm.get('wFactionBgd')?.enable();

        this.operatives = value.fireteams[0]?.operatives;
        this.ploys = value.ploys.strat.concat(value.ploys.tac);
        this.equipment = value.equipments.filter(
          (item: any) => item.eqcategory === 'Equipment'
        );
        this.tacops = value.tacops;
      }
    });
  }

  downloadImage() {
    html2canvas(this.firstCard.nativeElement, { scale: 1.1 }).then((canvas) => {
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

  updateBckg(event: any) {
    this.cardsService.updateBckg(event.value);
  }
}
