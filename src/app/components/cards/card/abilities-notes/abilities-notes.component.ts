import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-abilities-notes',
  templateUrl: './abilities-notes.component.html',
  styleUrls: ['./abilities-notes.component.scss']
})
export class AbilitiesNotesComponent implements OnInit {
  @Input() card!: Card;

  constructor() { }

  ngOnInit() {
  }

}
