import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from "gatsby-image";
import Comments from "./Comments";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug      
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }  
      }
      body
    }
  }
`

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div className="mb-5">
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      </div>
      <h1 className="font-serif text-3xl font-bold tracking-tight">{post.frontmatter.title}</h1>
      <h5 className="font-self text-md font-bold tracking-tight text-gray-500 mb-5">{post.frontmatter.author}</h5>      
      <MDXRenderer className="font-serif">{post.body}</MDXRenderer>    
      <Comments post = {post.frontmatter.slug} postTile = {post.frontmatter.title} className/>        
    </Layout>
  );
};

export default Post;
