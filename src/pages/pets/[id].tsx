import Layout from "../../components/layout";
import { getAllPetIds } from "../../lib/pets";

export async function getStaticPaths() {
  const paths = getAllPetIds();
  console.log("meow?");
}

export default function Pet() {
  return <Layout>Pets</Layout>;
}
