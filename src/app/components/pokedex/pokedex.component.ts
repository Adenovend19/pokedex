import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, PokemonModalComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {
  allPokemon: Pokemon[] = [];
  displayedPokemon: Pokemon[] = [];
  loading = true;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 16; // 151 / 10 = 15.1 -> 16 pages
  selectedPokemon: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList(151).subscribe({
      next: (data) => {
        this.allPokemon = data;
        this.updateDisplayedPokemon();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load Pokemon', err);
        this.loading = false;
      }
    });
  }

  updateDisplayedPokemon() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedPokemon = this.allPokemon.slice(start, end);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedPokemon();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get paginationButtons(): number[] {
    const buttons: number[] = [];
    const maxVisible = 5;

    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) buttons.push(i);
    } else {
      // Logic for 5 buttons with current page attempt to be in middle
      let start = Math.max(1, this.currentPage - 2);
      let end = Math.min(this.totalPages, start + maxVisible - 1);

      if (end === this.totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }
    }
    return buttons;
  }

  openDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
