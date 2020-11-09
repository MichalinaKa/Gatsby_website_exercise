import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby'

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
     query{
        flower: file(relativePath: {eq: "flower-mouth.png"})
            {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fist: file(relativePath: {eq: "fist.png"})
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
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                        <h3>the ability to create</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsam accusantium modi impedit rerum, mollitia nesciunt eum quas culpa? Facere perspiciatis magnam, quasi similique minus sunt alias architecto repellendus eius?</p>
                        <div className="btn-row">
                            <Link to="/work">View series</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                          <Img fluid={data.fist.childImageSharp.fluid}/>
                        </div>
                        <div className="bottom-left">
                          <Img fluid={data.flower.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box">

            </div>
            <div className="black-box overlay">
                
             </div>
        </div>
    )
}

export default AboutBlurb