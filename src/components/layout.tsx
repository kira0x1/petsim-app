import Image from "next/image";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Kira";
export const siteTitle = "PetSim";

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pet Simulator App" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
