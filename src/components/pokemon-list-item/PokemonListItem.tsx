import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../../constants/routePaths.ts'
import { Pokemon } from '../../types/pokemon.ts'
import { FC } from 'react'

interface PokemonListItemProps {
  pokemon: Pokemon
}

const PokemonListItem: FC<PokemonListItemProps> = ({ pokemon }) => {
  return (
    <li key={pokemon.name}>
      <Link
        to={ROUTE_PATHS.POKEMON_DETAILS(pokemon.id)}
        className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer"
      >
        <img src={pokemon.imageUrl} alt={pokemon.name} className="w-20 h-20" />
        <span className="capitalize text-gray-800">{pokemon.name}</span>
      </Link>
    </li>
  )
}

export default PokemonListItem
