import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Card } from '../../card';
import { allData } from 'src/assets/compendium';

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

  constructor() {}

  @Input() factions!: any;
  @Input() operatives!: any;
  //killteams[7].fireteams[0].operatives;

  ngOnInit(): void {
    console.log(this.allData);
    debugger;


    this.weaponForm.get('wPloy')?.valueChanges.subscribe((value) => {
      this.card.ploy = value;
    });

    this.imp = this.allData[2];
  }
}
