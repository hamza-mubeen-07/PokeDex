import { render, screen } from '@testing-library/react'
import PokemonInfoTable from './PokemonInfoTable'

describe('PokemonInfoTable Component', () => {
  const mockPokemon = {
    name: 'charizard',
    height: 170,
    weight: 90.5,
    types: [
      {
        slot: 1,
        type: {
          name: 'flying',
          url: '',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fire',
          url: '',
        },
      },
    ],
  }

  test('Should render the Pokémon details correctly', () => {
    render(<PokemonInfoTable {...mockPokemon} />)

    expect(screen.getByText(/Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Height/i)).toBeInTheDocument()
    expect(screen.getByText(/Weight/i)).toBeInTheDocument()
    expect(screen.getByText(/Types/i)).toBeInTheDocument()

    expect(screen.getByText('charizard')).toBeInTheDocument()
    expect(screen.getByText('170 cm')).toBeInTheDocument()
    expect(screen.getByText('90.5 kg')).toBeInTheDocument()
  })

  test('Should handle multiple Pokémon types correctly', () => {
    render(<PokemonInfoTable {...mockPokemon} />)

    expect(screen.getByText('flying, fire')).toBeInTheDocument()
  })

  test('Should handle single Pokémon type correctly', () => {
    render(
      <PokemonInfoTable
        {...mockPokemon}
        types={[
          {
            slot: 1,
            type: {
              name: 'flying',
              url: '',
            },
          },
        ]}
      />
    )

    expect(screen.getByText('flying')).toBeInTheDocument()
  })

  test('Should match the snapshot', () => {
    const { asFragment } = render(<PokemonInfoTable {...mockPokemon} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
