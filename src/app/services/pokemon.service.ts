import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Pokemon, PokemonDetail, PokemonListResponse } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private readonly baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getPokemonList(limit: number = 151): Observable<Pokemon[]> {
        return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}`).pipe(
            switchMap(response => {
                const detailRequests = response.results.map(item =>
                    this.http.get<PokemonDetail>(item.url)
                );
                return forkJoin(detailRequests);
            }),
            map(details => details.map(detail => this.mapToPokemon(detail)))
        );
    }

    private mapToPokemon(detail: PokemonDetail): Pokemon {
        return {
            id: detail.id.toString(),
            displayId: `#${detail.id.toString().padStart(3, '0')}`,
            name: detail.name.charAt(0).toUpperCase() + detail.name.slice(1),
            image: detail.sprites.other['official-artwork'].front_default,
            weight: detail.weight,
            height: detail.height,
            types: detail.types.map(t => t.type.name),
            abilities: detail.abilities.map(a => a.ability.name),
            moves: detail.moves.map(m => m.move.name).slice(0, 5) // Limit moves for display
        };
    }
}
