import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbilitiesNotesComponent } from './components/cards/card/abilities-notes/abilities-notes.component';
import { SymbolReplace } from './pipes/symbolReplace';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { MainStatsComponent } from './components/cards/card/main-stats/main-stats.component';
import { WeaponFormComponent } from './components/cards/card/forms/weapon-form/weapon-form.component';
import { MainStatsFormComponent } from './components/cards/card/forms/main-stats-form/main-stats-form.component';
import { PloyCardComponent } from './components/cards/card/ploy-card/ploy-card.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OperativeSelectionComponent } from './components/cards/selection-forms/operative-selection/operative-selection.component';
import { PloySelectionComponent } from './components/cards/selection-forms/ploy-selection/ploy-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    MainStatsComponent,
    WeaponFormComponent,
    MainStatsFormComponent,
    OperativeSelectionComponent,
    SymbolReplace,
    AbilitiesNotesComponent,
    PloyCardComponent,
    PloySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
