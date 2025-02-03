import { getPokemonIdAndImage } from './commonutils'

describe('getPokemonIdAndImage Utility Function', () => {
  test('Should extract the correct Pokémon ID and image URL from a valid API URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/'
    const result = getPokemonIdAndImage(url)

    expect(result).toEqual({
      id: '25',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    })
  })

  test('Should throw an error if the URL does not contain a valid Pokémon ID', () => {
    const invalidUrl = 'https://pokeapi.co/api/v2/pokemon/'

    expect(() => getPokemonIdAndImage(invalidUrl)).toThrow(
      'Pokemon id not found in the url!'
    )
  })

  test('Should throw an error if the input URL is completely invalid', () => {
    const completelyInvalidUrl = 'https://randomsite.com/pokemon-name'

    expect(() => getPokemonIdAndImage(completelyInvalidUrl)).toThrow(
      'Pokemon id not found in the url!'
    )
  })

  test('Should handle edge cases with missing trailing slash', () => {
    const urlWithoutTrailingSlash = 'https://pokeapi.co/api/v2/pokemon/150'

    const result = getPokemonIdAndImage(urlWithoutTrailingSlash)

    expect(result).toEqual({
      id: '150',
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    })
  })
})
