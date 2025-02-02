import { FC } from 'react'

interface PageHeaderProps {
  title: string
}
const PageHeader: FC<PageHeaderProps> = ({ title }) => (
  <div className="bg-purple-600 text-white text-lg font-bold p-4">{title}</div>
)

export default PageHeader
