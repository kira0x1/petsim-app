import { Inter } from "@next/font/google";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Suspense } from "react";
import { Color } from "three";
import Content from "../components/content";
import Layout from "../components/layout";
import { Model } from "../components/model";
import Tabs from "../components/tabs";

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
      <div id="canvas-container" className="w-full h-96">
        <Canvas>
          <Suspense fallback={null}>
            <Environment preset="sunset" background />
            {/* <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} /> */}
            <Model />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
