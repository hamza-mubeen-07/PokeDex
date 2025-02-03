import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  PokemonDetails,
  PokemonListApiInitialResponse,
  PokemonListApiTransformedResponse,
} from '../types/pokemon.ts'
import { getPokemonIdAndImage } from '../utils/commonutils.ts'
import { API_ENDPOINTS } from '../constants/apiEndpoints.ts'
import { ENV_VALUES } from '../constants/environmentValues.ts'

export const pokemonApis = createApi({
  reducerPath: 'pokemonApis',
  baseQuery: fetchBaseQuery({ baseUrl: ENV_VALUES.BASE_API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListApiTransformedResponse, void>({
      query: () => API_ENDPOINTS.POKEMON_LIST(),
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
      query: (id) => API_ENDPOINTS.POKEMON_DETAILS(id),
    }),
  }),
})

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApis
