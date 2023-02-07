import { getPets } from ".";
import Header from "../../components/header";
import styles from "./Pets.module.css";
import PocketBase from "pocketbase";

export async function getStaticPaths() {
  const pets = await getPets();
  const paths = pets.map((p) => {
    return {
      params: {
        id: p.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pet = await getPet(params.id);

  return {
    props: {
      pet,
    },
  };
}

async function getPet(petId: string) {
  const db = new PocketBase("http://127.0.0.1:8090");
  const res = await db.collection("pets").getFirstListItem(`name="${petId}"`);

  return {
    ...res,
  };
}

export default function PetPage({ pet }: any) {
  return (
    <>
      <Header backLink="/pets" />
      <div className={styles.pet}>
        <h3 className={styles.petName}>{pet.name}</h3>
        <h5>{pet.weight} kg</h5>
      </div>
    </>
  );
}
