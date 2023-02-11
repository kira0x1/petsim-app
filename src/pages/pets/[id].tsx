import Image from "next/image";
import Header from "../../components/header";
import { getPet, getPets } from "../../lib/pet_util";
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
  const { id, name, sprites, weight, evolutions } = await getPet(params.id);

  return {
    props: {
      pet: {
        id,
        name,
        sprites,
        weight,
        evolutions,
      },
    },
  };
}

export default function PetPage({ pet }: { pet: Pokemon }) {
  return (
    <>
      <Header backLink="/pets" />
      <div className={styles.pet}>
        <div className={styles.main_pet}>
          <h3 className="text-rose-500 text-2xl bold capitalize">{pet.name}</h3>
          {/* <h5>{pet.weight} kg</h5> */}
          <div className={styles.pet_sprite}>
            <Image
              priority={true}
              src={pet.sprites.front_default}
              width={96}
              height={96}
              alt={pet.name}
              className="max-w-full w-auto h-auto"
            />
          </div>

          {pet.evolutions?.length > 0 && <h2 className="mt-4">Evolutions</h2>}

          <div className={styles.evolution_grid}>
            {pet.evolutions?.map((e) => {
              return (
                <div key={e.id} className="mt-5">
                  <h3 className="text-rose-500 text-1xl bold capitalize">
                    {e.name}
                  </h3>
                  <Image
                    priority={true}
                    src={e.sprites.front_default}
                    width={96}
                    height={96}
                    alt={pet.name}
                    style={{ maxWidth: "100%", width: "auto", height: "auto" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
