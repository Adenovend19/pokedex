export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    };
    types: {
        type: {
            name: string;
        }
    }[];
    abilities: {
        ability: {
            name: string;
        }
    }[];
    moves: {
        move: {
            name: string;
        }
    }[];
}

export interface Pokemon {
    id: string;
    displayId: string;
    name: string;
    image: string;
    weight: number;
    height: number;
    types: string[];
    abilities: string[];
    moves: string[];
}
