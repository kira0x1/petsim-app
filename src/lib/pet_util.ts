import chalk from "chalk";

export async function getPets() {
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const data = await db.collection("pets").getList(1, 30);

  const pokemons = await fetch(`https://pokeapi.co/api/v2/generation/1/`);
  const res: any[] = [];
  const badPokemons = ["giratina", "shaymin", "wormadam"];
  try {
    const pokemonRes = await pokemons.json();
    for (const pokemon of pokemonRes.pokemon_species) {
      if (badPokemons.includes(pokemon.name)) continue;
      res.push({ id: pokemon.name });
    }
  } catch (e) {
    console.error(e);
  }

  return res;
}

export async function getPet(name: string) {
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const res = await db.collection("pets").getFirstListItem(`name="${petId}"`);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  if (!res.ok) {
    console.log(chalk.bgRed.bold(`\n\nerror during request for: ${name}\n\n`));
  }
  const data = await res.json();

  const speciesReq = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}/`
  );

  const species = await speciesReq.json();

  const evoReq = await fetch(species.evolution_chain.url);

  if (!evoReq.ok) {
    console.log(
      chalk.bgRed.bold(
        `\n\nerror during initial evolution request for: ${species?.name}\n\n`
      )
    );
  }
  const evoData = await evoReq.json();

  const allEvo: any[] = [];
  getEvolution(evoData.chain.evolves_to, allEvo);

  const evoDatas: any[] = [];

  for (const evo of allEvo) {
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.name}/`);

    if (!req.ok) {
      console.log(
        chalk.bgRed.bold(
          `\n\nerror during loop evolution request for: ${evo?.name}\n\n`
        )
      );

      break;
    }
    const data = await req.json();

    evoDatas.push({
      id: data.id,
      name: data.name,
      sprites: data?.sprites,
      weight: data.weight,
    });
  }

  return {
    name: data.name,
    id: data.id,
    weight: data.weight,
    sprites: data.sprites,
    evolutions: evoDatas,
  };
}

function getEvolution(pet: any, evos?: any[]) {
  if (!evos) {
    evos = [];
  }

  if (pet[0]) {
    evos.push(pet[0].species);
    const nextEvo = pet[0]?.evolves_to;
    if (!nextEvo) return;
    return getEvolution(nextEvo, evos);
  }

  return evos;
}
