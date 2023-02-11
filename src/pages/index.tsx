import Link from "next/link";
import Layout from "../components/layout";
import { Inter } from "@next/font/google";
import Tabs from "../components/tabs";
import Content from "../components/content";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Tabs />
      <Layout>
        <div className={inter.className}>
          <div className="text-lg bold mb-3">Home Page</div>
          <Link href={"/pets"} className="text-2xl bold">
            Pets
          </Link>
        </div>
        <Content>
          <Link href="#" className="text-white m-auto">
            meow
          </Link>
        </Content>
      </Layout>
    </>
  );
}
