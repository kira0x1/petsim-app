import Link from "next/link";
import Header from "../../components/header";
import { getPets } from "../../lib/pet_util";

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
