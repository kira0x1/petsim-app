import styles from "../Pets.module.css";
import PocketBase from "pocketbase";

async function getPet(petId: string) {
  console.log(petId);
  const db = new PocketBase("http://127.0.0.1:8090");
  const res = await db.collection("pets").getFirstListItem(`name="${petId}"`);

  //   const res = await fetch(
  // `http://127.0.0.1:8090/api/collections/pets/records/${petId}`,
  // {
  //   next: { revalidate: 10 },
  // }
  //   );

  return res as any;
}

export default async function PetPage({ params }: any) {
  const pet = await getPet(params.id);

  return (
    <div>
      <h1>pet/{pet.name}</h1>
      <div className={styles.pet}>
        <h3>{pet.name}</h3>
      </div>
    </div>
  );
}
