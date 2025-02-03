import { render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom' // Use MemoryRouter for testing
import PokemonListItem from './PokemonListItem'
import { ROUTE_PATHS } from '../../constants/routePaths.ts'
import userEvent from '@testing-library/user-event'

const mockPokemon = {
  id: '1',
  name: 'pikachu',
  imageUrl: 'https://example.com/pikachu.png',
  url: '',
}

describe('PokemonListItem', () => {
  it('renders the Pokemon name and image', () => {
    render(
      <MemoryRouter>
        <PokemonListItem pokemon={mockPokemon} />
      </MemoryRouter>
    )

    const nameElement = screen.getByText(/pikachu/i)
    expect(nameElement).toBeInTheDocument()

    const imageElement = screen.getByRole('img', { name: /pikachu/i })
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', mockPokemon.imageUrl)
  })

  it('renders a link to the Pokemon details page', () => {
    render(
      <MemoryRouter>
        <PokemonListItem pokemon={mockPokemon} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute(
      'href',
      ROUTE_PATHS.POKEMON_DETAILS(mockPokemon.id)
    )
  })

  it('navigates to the Pokemon details page when clicked', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PokemonListItem pokemon={mockPokemon} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link')
    await user.click(linkElement)

    const mockNavigate = useNavigate()
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTE_PATHS.POKEMON_DETAILS(mockPokemon.id)
    )
  })
})
