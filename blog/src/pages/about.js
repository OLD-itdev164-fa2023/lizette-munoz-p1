import React from "react"
import {graphql, Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({data}) => {
    const {Name, Company} = data.site.siteMetadata.contact;
    return (
        <Layout>
        <Seo title="Home"/>
        <h1>About Us</h1>
        <p>{`${Company} was purchased by ${Name} in 2022.`}</p>
        <p>{`At ${Company} We make movie blogs`}</p>
        <div style={{maxWidth:`300px`, marginBottom:`1.45rem`}}>
        <StaticImage
        src="../images/0c3297f3516a415219c7e89e16a4a3d2.jpg"
        width = {300}
        quality={95}
        formats={["auto","webp", "avif"]}
        alt="Movie Blog Inc Icon"
        style={{marginBottom:`1.45rem`}}/>
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
query{
    site{
        siteMetadata{
            contact{
                name
                company
            }
        }
    }
}`