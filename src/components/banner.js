import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Banner = () => {
    const data = useStaticQuery(graphql`
     query{
        poppinshades: file(relativePath: {eq: "poppin-shades.png"})
            {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        diamonds: file(relativePath: {eq: "diamonds.png"})
            {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        orange: file(relativePath: {eq: "sexy-orange.png"})
            {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
 `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
    
                    <div className="main-text">Oladimeji Odunsi</div>

                    <div className="side-image left">
                        <Img fluid={data.diamonds.childImageSharp.fluid}/>
                    </div>

                    <div className="main-image">
                        <Img fluid={data.poppinshades.childImageSharp.fluid}/>
                    </div>
           
                    <div className="side-image right">
                        <Img fluid={data.orange.childImageSharp.fluid}/>
                    </div>
                 </div>
                 <div className="scroll">
                        <span>Scroll down</span>
                </div>
             </div>
             <div className="fixed-misc">
                 Visual Artist and photographer
             </div>
          </div>
    )
}

export default Banner