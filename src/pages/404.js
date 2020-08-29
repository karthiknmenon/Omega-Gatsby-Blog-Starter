import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
      </div>
      <div className="w-100 text-center ">
        <h2 className="text-center text-2xl font-bold block my-8 p-3 ">
              Where have you wandered to ? Lost in space ? 
        </h2>
        <Link to="/">Take Me Home 💨</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
