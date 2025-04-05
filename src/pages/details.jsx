import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-black-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-pink-300 rounded-lg shadow-xl overflow-hidden"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-black-800 mb-4 capitalize">{pokemonData.name}</h1>
                        <div className="relative w-48 h-48">
                            <img
                                className="w-full h-full object-contain"
                                src={pokemonData.sprites.front_default}
                                alt={`${pokemonData.name} front`}
                            />
                            <div className="absolute top-0 right-0">
                                <img
                                    className="w-20 h-20 object-contain opacity-75"
                                    src={pokemonData.sprites.back_default}
                                    alt={`${pokemonData.name} back`}
                                />
                            </div>
                        </div>
                        <PokemonAddCollection
                            Pokecod={pokeid}
                            imgSprite={pokemonData.sprites.front_default}
                            name={pokemonData.name}
                            url=''
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black-700 mb-2">Información</h2>
                        <div className="mb-4">
                            <p className="text-black-600"><span className="font-semibold">ID:</span> {pokeid}</p>
                            <p className="text-black-600"><span className="font-semibold">Altura:</span> {pokemonData.height / 10} m</p>
                            <p className="text- black-600"><span className="font-semibold">Peso:</span> {pokemonData.weight / 10} kg</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-black-700 mb-2">Tipos</h3>
                            <div className="flex flex-wrap gap-2">
                                {pokemonData.types.map((typeEntry) => (
                                    <span
                                        key={typeEntry.slot}
                                        className={`inline-block bg-black-300 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2 capitalize`}
                                    >
                                        {typeEntry.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-black-700 mb-2">Habilidades</h3>
                            <ul className="list-disc list-inside text-black-600">
                                {pokemonData.abilities.map((abilityEntry) => (
                                    <li key={abilityEntry.slot} className="capitalize">
                                        {abilityEntry.ability.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};