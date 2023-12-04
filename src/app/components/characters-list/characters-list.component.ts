import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../classes/character';
import { CharactersService } from '../../services/characters.service';
import { CharacterComponent } from '../character/character.component';
import { MyMaterialModule } from '../../modules/my-material/my-material.module';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
  providers :[CharactersService],
  imports : [CharacterComponent ,CommonModule,MyMaterialModule]
})

export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  
  constructor(private characterService:CharactersService) {}

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters )
  }

  ngOnInit() {
    this.getCharacters(); 
  }

}
