import React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";

const Card = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx{
                nodes{
                    frontmatter{
                        title
                        author
                        date
                        slug
                        image {
                            childImageSharp {
                                fluid(
                                    maxWidth: 100
                                    maxHeight: 100
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }                           
                    }
                    excerpt
                }
            }
        }
    `);
    console.log(data.allMdx.nodes)
    return(
        <>
        {data.allMdx.nodes.map(object => (
            <Link to={object.frontmatter.slug} key = {object.frontmatter.title}>
                <div className="max-w-sm w-full mb-5 lg:max-w-full lg:flex hover:shadow-lg">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <Img fluid={object.frontmatter.image.childImageSharp.fluid} alt={object.title}/>
                    </div>
                    <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{object.frontmatter.title}</div>
                            <p className="text-gray-700 text-base">{object.excerpt}</p>
                        </div>
                        <div className="flex items-center">
                            {/* <img className="w-10 h-10 rounded-full mr-4" src={} alt={object.frontmatter.author} /> */}
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{object.frontmatter.author}</p>
                                <p className="text-gray-600">{object.frontmatter.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}   
         </>     
    )
}

export default Card;