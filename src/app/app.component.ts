import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div><label>id: </label>{{hero.id}}</div>
    `
})

export class AppComponent {
  title = 'Hall of Super Heroes';
  hero: Hero = {
    id: 1,
    name: 'Jessica Jones'
  };
}

