import React from "react";
import {graphql} from "gatsby";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const Comments = (props) => {
    const query = graphql`
        query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
            title
            author
            slug               
            }
            body
        }
        }
    `
  let disqusConfig = {
    url: `https://omega-starter.netlify.app/${query.slug}`,
    title: query.title,
  }
  console.log(`${props.post}`)
  return (
    <>
      <h1>{query.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default Comments;