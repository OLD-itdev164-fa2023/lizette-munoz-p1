import React from "react";
import { graphql,Link } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact =({data}) =>{
    const{name, company, address}=data.site.siteMetadata.contact;
    return(
        <Layout>
        <Seo title="Home"/>
        <h1>Contact Us</h1>
        <p>Please send all enquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div style= {{maxWidth:`300`, marginBottom:`1.45rem`}}>
        <StaticImage
            src="../images/0c3297f3516a415219c7e89e16a4a3d2.jpg"
            width={300}
            quality={95}
            formats={["auto","webp","avif"]}
            alt="A Gatsby astronaut"
            style={{marginBottom:`1.45rem`}}
        />
        </div>
        <Link to="/">Home</Link>
        
        </Layout>
    )
}

export default Contact 

export const query = graphql`
query{
    site{
        siteMetadata{
            contact{
                name
                company
                address
            }
        }
    }
}
`