import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image";
import usePost from "../hooks/usePost"

const Card = () => {
    const data = usePost();    
    return(
        <>
        {data.allMdx.nodes.map(object => (
            <Link to={object.frontmatter.slug} key = {object.frontmatter.title}>
                <div className="max-w-sm w-full mb-5 transition delay-150 duration-300 ease-in-out lg:max-w-full lg:flex hover:shadow-lg">
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
                            </div>                           
                        </div>
                        <div className="w-100 flex justify-between text-sm">
                                <p className="text-gray-600">{object.fields.readingTime.text}</p>
                                <p className="text-gray-600">{object.frontmatter.date}</p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}   
         </>     
    )
}

export default Card;