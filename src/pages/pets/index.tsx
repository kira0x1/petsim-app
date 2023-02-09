import Link from "next/link";
import Header from "../../components/header";

export async function getPets() {
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const data = await db.collection("pets").getList(1, 30);

  const pokemons = await fetch(`https://pokeapi.co/api/v2/generation/4/`);
  const res: any[] = [];
  const badPokemons = ["giratina", "shaymin", "wormadam"];
  try {
    const pokemonRes = await pokemons.json();

    for (const pokemon of pokemonRes.pokemon_species) {
      if (badPokemons.includes(pokemon.name)) continue;
      res.push({ id: pokemon.name });
    }
  } catch (e) {}

  return res;
}

export async function getStaticProps() {
  const allPets = await getPets();

  return {
    props: {
      allPets,
    },
  };
}

export default function PetsPage({ allPets }) {
  return (
    <div className="header">
      <h1 className="header-title">Pets</h1>
      <Header backLink={"/"} />
      <div className="pet-list">
        {allPets?.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
    </div>
  );
}

function Pet({ pet }: any) {
  const { id } = pet || {};

  return (
    <Link href={`/pets/${pet.id}`} className="pet-link">
      {id}
    </Link>
  );
}
