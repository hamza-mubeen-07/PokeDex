export interface BasicPokemon {
  name: string
  url: string
}

export interface Pokemon extends BasicPokemon {
  imageUrl: string
  id: string
}

export interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonSprites {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface PokemonDetails {
  height: number
  id: number
  name: string
  sprites: PokemonSprites
  types: PokemonType[]
  weight: number
}

export interface PokemonListApiInitialResponse {
  count: number
  next: string | null
  previous: null | string
  results: BasicPokemon[]
}

export interface PokemonListApiTransformedResponse
  extends Omit<PokemonListApiInitialResponse, 'results'> {
  count: number
  next: string | null
  previous: null | string
  results: Pokemon[]
}
