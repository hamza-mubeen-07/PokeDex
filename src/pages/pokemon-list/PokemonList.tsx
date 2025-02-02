import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../router/routePaths.ts";
import {useGetPokemonListQuery} from "../../api/PokemonApis.ts";

const PokemonList = () => {

    const {data, isLoading} = useGetPokemonListQuery();
    console.log(data?.results[0]);
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-600 text-white text-lg font-bold p-4">
                PokeReact
            </div>
            {
                isLoading
                    ? <p>Loading...</p>
                    : data?.results && <ul className="divide-y divide-gray-300">
                    {data.results.map((pokemon) => (
                        <li key={pokemon.name}>
                            <Link className={"flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer"}
                                  to={ROUTE_PATHS.POKEMON_DETAILS(pokemon.id)}>
                                <img src={pokemon.imageUrl} alt={pokemon.name} className="w-20 h-20"/>
                                <span className="capitalize text-gray-800">{pokemon.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default PokemonList;