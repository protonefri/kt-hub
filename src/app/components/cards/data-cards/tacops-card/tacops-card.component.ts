import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-tacops-card',
  templateUrl: './tacops-card.component.html',
  styleUrls: ['./tacops-card.component.css']
})
export class TacopsCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() backgroundColor!: string;
  @Input() fontColor!: string;

  constructor() { }

  ngOnInit() {
  }

}
