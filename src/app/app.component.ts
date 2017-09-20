import { Component } from '@angular/core';
import { Hero } from './hero';

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

/*add click handler to expose selected hero. SelectedHero property won't initialize until user picks a hero */
/*onSelect() method selects the SelectedHero property to the hero that the user clicks */
export class AppComponent {
  title = 'Hall of Super Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 
}


