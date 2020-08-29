import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/Card.js";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `karthik-menon`, 'mojojojo20']}
        title="Home"
      />
      <section className="text-center mb-5 md:mb-2 lg:mb-5 xl:mb-6 border-b-2 border-gray-200">
        <h2 className="inline-block p-3 text-4xl font-bold">
          Blog
        </h2>
      </section>
      <Card />
    </Layout>
  );
}

export default IndexPage;
