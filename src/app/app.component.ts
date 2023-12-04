import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from "./components/characters-list/characters-list.component";
import { PageNotFoundComponent } from './components/page-not-found.component';
import { CharacterComponent } from './components/character/character.component';
import { RouterModule ,Routes } from '@angular/router';
import { MoviesModule } from './modules/movies/movies.module';
import { MyMaterialModule } from './modules/my-material/my-material.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule, 
      MoviesModule,
      RouterModule, 
      CharactersListComponent,
      CharacterComponent,
      PageNotFoundComponent,  
      MyMaterialModule,
    ],
})


export class AppComponent {
  title = 'Tabby Portfolio';
  app_name = "PORTFOLIO";
}
