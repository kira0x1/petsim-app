import Link from "next/link";

export default function Header({
  backLink,
  text,
}: {
  backLink: string;
  text?: string;
}) {
  return (
    <Link href={backLink} className="backBtn">
      {text ? text : "Back"}
    </Link>
  );
}
