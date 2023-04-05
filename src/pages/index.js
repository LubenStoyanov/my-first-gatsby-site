import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>I'm making this by following the Gatbsy Tutorial.</h1>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
