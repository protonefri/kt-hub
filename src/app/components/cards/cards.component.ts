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

  backgroundColor: any = '#c54c21';
  fontColor: any = '#ffffff';

  weaponForm!: FormGroup;

  card!: Card;
  ploys!: Ploy[];

  cssForm!: FormGroup;

  constructor(private cardsService: CardsService) {}

  changePloy(event: any) {
    this.ploys = event as Ploy[];
  }

  changePloySelect(event: any) {
    this.card.ploy = event;
  }

  ngOnInit() {
    this.cardsService.card$.subscribe({
      next: (data) => {
        this.card = data;
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
