import {useStaticQuery, graphql} from "gatsby";
const usePost = () => {
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
                    fields{
                        readingTime{
                        text
                        }
                    }
                    excerpt
                }
            }
        }
    `);
    return(
        data
    )
}

export default usePost;