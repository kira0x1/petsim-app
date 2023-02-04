import PocketBase from "pocketbase";
import Link from "next/link";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getPets() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("pets").getList(1, 30);

  //   const res = await fetch(
  //     "http://127.0.0.1:8090/api/collections/pets/records?page=1&perPage=30",
  //     {
  //       cache: "no-store",
  //     }
  //   );

  //   const data = await res.json();
  return data?.items as any[];
}

export default async function PetsPage() {
  const pets = await getPets();
  return (
    <div>
      <h1>Pets</h1>
      <div>
        {pets?.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
    </div>
  );
}

function Pet({ pet }: any) {
  const { id, name } = pet || {};

  return (
    <Link href={`/pets/${pet.name}`}>
      <div>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}
