import Link from "next/link";
import Header from "../../components/header";
import styles from "./Pets.module.css";
import { getPets } from "../../lib/pet_util";
import Tabs from "../../components/tabs";

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
    <>
      <Tabs />
      <div className="header">
        <h1 className="bold text-lg mt-2 ml-1">Pets</h1>
        <div className="ml-1">
          <Header backLink={"/"} />
        </div>
        <div className={styles.pet_list}>
          {allPets?.map((pet) => {
            return <Pet key={pet.id} pet={pet} />;
          })}
        </div>
      </div>
    </>
  );
}

function Pet({ pet }: any) {
  const { id } = pet || {};

  return (
    <Link
      href={`/pets/${pet.id}`}
      className="flex capitalize bg-gray-200 w-28 h-20 bold"
    >
      <p className="m-auto">{id}</p>
    </Link>
  );
}
