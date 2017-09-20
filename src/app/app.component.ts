import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Jessica Jones' },
  { id: 2, name: 'Luke Cage' },
  { id: 3, name: 'Misty Knight' },
  { id: 4, name: 'America Chavez' },
  { id: 5, name: 'Kamala Khan' },
  { id: 6, name: 'Miles Morales' },
  { id: 7, name: 'Colleen Wing' },
  { id: 8, name: 'Supergirl' },
  { id: 9, name: 'Storm' },
  { id: 10, name: 'Jubilee' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hall of Super Heroes';
  heroes = HEROES;
}


