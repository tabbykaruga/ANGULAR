import { Component ,OnInit ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  @Input()
  character! : Character;

  constructor () { }

  ngOnInit(){
    
  }
}
