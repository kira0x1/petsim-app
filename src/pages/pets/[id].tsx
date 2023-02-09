import Image from "next/image";
import { getPets } from ".";
import Header from "../../components/header";
import { Pokemon } from "../../types/pet";
import styles from "./Pets.module.css";

export async function getStaticPaths() {
  const pets = await getPets();

  const paths = pets.map((p) => {
    return {
      params: {
        id: p.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id, name, sprites, weight } = await getPet(params.id);

  return {
    props: {
      pet: {
        id,
        name,
        sprites,
        weight,
      },
    },
  };
}

async function getPet(name: string) {
  // const db = new PocketBase("http://127.0.0.1:8090");
  // const res = await db.collection("pets").getFirstListItem(`name="${petId}"`);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const data = await res.json();
  const evoReq = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${data.id}/`
  );

  const evoData = await evoReq.json();
  const chain = evoData.chain;
  const req = await fetch(chain.species.url);
  const p = await req.json();

  return {
    name: data.name,
    id: data.id,
    weight: data.weight,
    sprites: data.sprites,
    evolutions: [{ id: p.id, name: p.name }],
  };
}

export default function PetPage({ pet }: { pet: Pokemon }) {
  return (
    <>
      <Header backLink="/pets" />
      <div className={styles.pet}>
        <h3 className={styles.petName}>{pet.name}</h3>
        <h5>{pet.weight} kg</h5>
        <div className={styles.pet_sprite}>
          <Image
            priority
            src={pet.sprites.back_default}
            width={200}
            height={200}
            alt="meow"
            style={{ maxWidth: "100%", width: "auto", height: "auto" }}
          />
          {pet.evolutions?.map((e) => {
            return (
              <div key={e.id}>
                <h3 className={styles.petName}>{e.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
