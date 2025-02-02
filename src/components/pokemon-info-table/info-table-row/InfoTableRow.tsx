import { FC } from 'react'

interface InfoTableRowProps {
  label: string
  value: string | number
}

const InfoTableRow: FC<InfoTableRowProps> = ({
  label,
  value,
}: {
  label: string
  value?: string | number
  capitalize?: boolean
}) => (
  <tr className="border-b">
    <td className="font-semibold p-2">{label}</td>
    <td className={`p-2 capitalize`}>{value || 'N/A'}</td>
  </tr>
)

export default InfoTableRow
