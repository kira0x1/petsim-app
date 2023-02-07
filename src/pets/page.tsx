import Link from "next/link";
import Header from "../components/header";

async function getPets() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/pets/records?page=1&perPage=30"
  );

  const data = await res.json();
  return data?.items as any[];
}

export default async function PetsPage() {
  const pets = await getPets();
  return (
    <div className="header">
      <h1 className="header-title">Pets</h1>
      <Header backLink={"/"} />
      <div className="pet-list">
        {pets?.map((pet) => {
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
