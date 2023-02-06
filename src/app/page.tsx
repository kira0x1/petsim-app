import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="text-lg bold">Home Page</div>
      <Link href={"/pets"} className="text-md bold">
        Pets
      </Link>
    </div>
  );
}
