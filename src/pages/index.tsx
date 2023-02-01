import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="A Pet Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMid}>
        <p>meow</p>
        <p>nya</p>
      </section>
      <div className={styles.main}>
        <h1>
          read <Link href="/posts/first_post">meow</Link>
        </h1>
      </div>
    </Layout>
  );
}
