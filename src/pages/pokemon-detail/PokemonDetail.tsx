import { useGetPokemonByIdQuery } from '../../api/PokemonApis.ts'
import { useParams } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/commonutils.ts'

const PokemonDetail = () => {
  const params = useParams<{ id: string }>()

  const { data } = useGetPokemonByIdQuery(params.id as string)

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-purple-600 text-white text-lg font-bold p-4 text-center">
        {capitalizeFirstLetter(data?.name)}
      </div>
      {data ? (
        <>
          <div className="flex justify-center p-4">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="w-32 h-32"
            />
          </div>

          <div className="p-4 text-black">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold p-2">Name</td>
                  <td className="p-2 capitalize">{data.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold p-2">Height</td>
                  <td className="p-2">{data.height}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold p-2">Weight</td>
                  <td className="p-2">{data.weight}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Types</td>
                  <td className="p-2">
                    {data.types.map((type, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 rounded-md px-2 py-1 mr-1 text-sm capitalize"
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PokemonDetail
