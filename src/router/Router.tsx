import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTE_PATHS } from '../constants/routePaths.ts'
import PokemonListing from '../pages/pokemon-list/PokemonList.tsx'
import PokemonDetails from '../pages/pokemon-detail/PokemonDetail.tsx'

const { HOME, POKEMON_DETAILS } = ROUTE_PATHS

const Router: FC = () => {
  const routes = [
    {
      path: HOME,
      element: <PokemonListing />,
    },
    {
      path: POKEMON_DETAILS(),
      element: <PokemonDetails />,
    },
  ]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default Router
