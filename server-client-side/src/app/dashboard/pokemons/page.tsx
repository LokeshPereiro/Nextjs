import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
// import { notFound } from "next/navigation";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  //   throw new Error("Ops! Something went wrong");
  // throw notFound();
  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(50);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        <small>Static</small>Pokemon List
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
