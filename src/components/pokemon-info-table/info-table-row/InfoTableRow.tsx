import { FC } from 'react'

interface InfoTableRowProps {
  label: string
  value: string | number | null
  unit?: string
}

const InfoTableRow: FC<InfoTableRowProps> = ({ label, value, unit }) => (
  <tr className="border-b">
    <td className="font-semibold p-2">{label}</td>
    <td className={`p-2`}>
      {value ? `${value}${unit ? ' ' + unit : ''}` : 'N/A'}
    </td>
  </tr>
)

export default InfoTableRow
