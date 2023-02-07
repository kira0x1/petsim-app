import Header from "../../components/header";
import styles from "../Pets.module.css";

async function getPet(petId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/pets/records`);

  const pets = await res.json();
  const petFound = pets.items.find((p) => p.name === petId);

  return petFound;
}

export default async function PetPage({ params }: any) {
  const pet = await getPet(params.id);

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
