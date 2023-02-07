import Link from "next/link";
import Header from "../../components/header";
import PocketBase from "pocketbase";

export async function getPets() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("pets").getList(1, 30);

  const res = data.items.map((p) => {
    return { id: p.id, name: p.name };
  });

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
  const { name } = pet || {};

  return (
    <Link href={`/pets/${pet.name}`} className="pet-link">
      {name}
    </Link>
  );
}
