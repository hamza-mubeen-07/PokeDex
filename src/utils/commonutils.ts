export const getPokemonIdAndImage = (url: string) => {
  const idMatch = url.match(/\/pokemon\/(\d+)\//)
  const id = idMatch ? idMatch[1] : null

  if (!id) {
    throw new Error('Pokemon id not found in the url!')
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return { id, imageUrl }
}
