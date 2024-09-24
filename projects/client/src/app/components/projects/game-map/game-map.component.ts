import { Component } from '@angular/core';

@Component({
  selector: 'app-game-map',
  standalone: true,
  imports: [],
  templateUrl: './game-map.component.html',
  styleUrl: './game-map.component.scss'
})
export class GameMapComponent {

  nodes = [
    { id: 'town', label: 'Town', x: 100, y: 100 },
    { id: 'forest', label: 'Forest', x: 200, y: 200 },
    { id: 'dungeon', label: 'Dungeon', x: 300, y: 300 },
    { id: 'castle', label: 'Castle', x: 400, y: 150 }
  ];

  links = [
    { source: 'town', target: 'forest' },
    { source: 'town', target: 'castle' },
    { source: 'forest', target: 'dungeon' },
    { source: 'castle', target: 'dungeon' }
  ];
  
}
