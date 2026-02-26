import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokedexComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-pokedex';
}
