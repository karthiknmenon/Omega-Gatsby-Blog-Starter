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
      url: `https://omega-starter.netlify.app/${props.post}`,
      identifier: props.post,
      title: query.title,
    }
    console.log(`https://omega-starter.netlify.app/${props.post}`)
  return (
    <div className="my-3">      
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </div>
  )
}

export default Comments;