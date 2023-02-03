import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="A Pet Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMid}>
        <h1>
          <Link href="/posts/first_post">Profile</Link>
        </h1>
      </section>

      <section className={`${utilStyles.headingMid} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.greenText}`}>
          Blog
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.bold}>{title}</div>
              <
                
                div className={`${utilStyles.lightText}`}>{date}</div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
