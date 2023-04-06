import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/layout/layout";

export default function Home({ post }) {
  return (
    <>
      <Layout>
        <main>
          <h1>Main </h1>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  /*
    All Fetchs
  */

  return {
    props: {
      post: {},
    },
  };
}
