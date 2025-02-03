import { render, screen } from '@testing-library/react'
import PageHeader from './PageHeader.tsx'

describe('PokemonHeader Component', () => {
  test('Should render the header title correctly', () => {
    render(<PageHeader title="PokeDex" />)
    const titleElement = screen.getByText(/PokeDex/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('Should have the correct background color applied', () => {
    const { container } = render(<PageHeader title="PokeDex" />)
    expect(container.firstChild).toHaveClass('bg-purple-600')
  })

  test('Should match the snapshot', () => {
    const { asFragment } = render(<PageHeader title="PokeDex" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
