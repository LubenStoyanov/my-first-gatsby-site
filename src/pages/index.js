import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>I'm making this by following the Gatbsy Tutorial.</h1>
        <StaticImage
          alt="A German Shepherd lying on a couch outside."
          src="../images/german-shepherd.jpg"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
