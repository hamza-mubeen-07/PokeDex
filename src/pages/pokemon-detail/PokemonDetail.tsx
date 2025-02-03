import { useGetPokemonByIdQuery } from '../../api/PokemonApis.ts'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/page-header/PageHeader.tsx'
import PokemonInfoTable from '../../components/pokemon-info-table/PokemonInfoTable.tsx'
import Loader from '../../core-components/loader/Loader.tsx'

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetPokemonByIdQuery(id as string)

  console.log(data)

  if (isLoading) return <Loader />

  if (isError || !data)
    return (
      <p className="text-center p-4 text-red-500">Failed to load Pokémon.</p>
    )

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <PageHeader title={data.name} />
      <div className="flex justify-center p-4">
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-32 h-32"
        />
      </div>
      <PokemonInfoTable
        name={data.name}
        height={data.height}
        weight={data.weight}
        types={data.types}
      />
    </div>
  )
}

export default PokemonDetail
