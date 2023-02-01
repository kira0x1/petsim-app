import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div className={styles.main}>
      <h1 className="title">meow this is my post</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </div>
  );
}
