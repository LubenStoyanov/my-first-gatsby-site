import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>I'm making this by following the Gatbsy Tutorial.</h1>
        <StaticImage
          alt="A German Shepherd lying on a couch outside."
          src="https://www.thesprucepets.com/thmb/SrSiTXM4VKVJH6zRuUFjjwrC9R4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/names-for-german-shepherds-4797840-hero-ed34431ad20c42c6894b4a29765b4d68.jpg"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
