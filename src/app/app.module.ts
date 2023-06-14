import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbilitiesNotesComponent } from './components/cards/abilities-notes/abilities-notes.component';
import { SymbolReplace } from './utils/pipes/symbolReplace';
import { CardsComponent } from './components/cards/cards.component';
import { MainStatsComponent } from './components/cards/main-stats/main-stats.component';
import { PloyCardComponent } from './components/cards/ploy-card/ploy-card.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OperativeSelectionComponent } from './components/cards/selection-forms/operative-selection/operative-selection.component';
import { PloySelectionComponent } from './components/cards/selection-forms/ploy-selection/ploy-selection.component';
import { MaterialModule } from './material/material.module';
import { WeaponFormComponent } from './components/cards/forms/weapon-form/weapon-form.component';
import { MainStatsFormComponent } from './components/cards/forms/main-stats-form/main-stats-form.component';
import { WeaponsComponent } from './components/cards/weapons/weapons.component';
import {
  MAT_COLOR_FORMATS,
  NGX_MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
} from '@angular-material-components/color-picker';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    MainStatsComponent,
    WeaponFormComponent,
    MainStatsFormComponent,
    OperativeSelectionComponent,
    SymbolReplace,
    AbilitiesNotesComponent,
    PloyCardComponent,
    PloySelectionComponent,
    WeaponsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    ColorPickerModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
