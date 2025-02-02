import { useGetPokemonListQuery } from '../../api/PokemonApis.ts'
import PokemonListItem from '../../components/pokemon-list-item/PokemonListItem.tsx'
import Loading from '../../core-components/loader/Loader.tsx'
import PageHeader from '../../components/page-header/PageHeader.tsx'

const PokemonList = () => {
  const { data, isLoading, isError } = useGetPokemonListQuery()

  if (isError)
    return (
      <p className="text-center p-4 text-red-500">
        Failed to load Pokémon list.
      </p>
    )

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <PageHeader title={'PokeDex'} />
      {isLoading ? (
        <Loading />
      ) : (
        data?.results && (
          <ul className="divide-y divide-gray-300">
            {data.results.map((pokemon) => (
              <PokemonListItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export default PokemonList
