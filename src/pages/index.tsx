import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="text-lg bold">Home Page</div>
        <Link href={"/pets"} className="text-md bold">
          Pets
        </Link>
      </div>
    </Layout>
  );
}
