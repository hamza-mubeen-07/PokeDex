import { FC } from 'react'
import InfoTableRow from './info-table-row/InfoTableRow.tsx'
import { PokemonType } from '../../types/pokemon.ts'

interface PokemonInfoTableProps {
  name: string
  height: number | null
  weight: number | null
  types: PokemonType[]
}

const PokemonInfoTable: FC<PokemonInfoTableProps> = ({
  name,
  height,
  weight,
  types,
}) => (
  <div className="p-4 text-black">
    <table className="w-full border-collapse">
      <tbody>
        <InfoTableRow label="Name" value={name} />
        <InfoTableRow label="Height" value={height} unit={'cm'} />
        <InfoTableRow label="Weight" value={weight} unit={'kg'} />
        <InfoTableRow
          label="Types"
          value={types?.map((t) => t.type.name).join(', ')}
        />
      </tbody>
    </table>
  </div>
)

export default PokemonInfoTable
