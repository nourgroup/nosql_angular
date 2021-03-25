import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTp1AngularComponent } from './app-tp1-angular/app-tp1-angular.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { EcrireComponent } from './ecrire/ecrire.component';
import { dataService } from './services/data.service';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { LectureComponent } from './lecture/lecture.component';
import { CurveComponent } from './curve/curve.component';

import { ChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
  { path: 'home', component: AppTp1AngularComponent },
  { path: 'ecriture', component: EcrireComponent },
  { path: 'curve/:id', component: CurveComponent },
  { path: 'lecture', component: LectureComponent },
  { path: 'visualisation', component: VisualisationComponent },
  { path: '', component: AppTp1AngularComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppTp1AngularComponent,
    FormSearchComponent,
    EcrireComponent,
    AfficherProduitComponent,
    VisualisationComponent,
    LectureComponent,
    CurveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ChartsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},dataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
