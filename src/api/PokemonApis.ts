import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  PokemonDetails,
  PokemonListApiInitialResponse,
  PokemonListApiTransformedResponse,
} from '../types/pokemon.ts'
import { getPokemonIdAndImage } from '../utils/commonutils.ts'

export const pokemonApis = createApi({
  reducerPath: 'pokemonApis',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListApiTransformedResponse, void>({
      query: () => 'pokemon',
      transformResponse: (response: PokemonListApiInitialResponse) => {
        return {
          ...response,
          results: response.results.map((pokemon) => {
            const { id, imageUrl } = getPokemonIdAndImage(pokemon.url)
            return {
              id,
              name: pokemon.name,
              imageUrl,
              url: pokemon.url,
            }
          }),
        }
      },
    }),
    getPokemonById: builder.query<PokemonDetails, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApis
