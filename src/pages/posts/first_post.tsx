import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>meow this is my post</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </Layout>
  );
}
