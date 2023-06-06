import React from 'react';
import HeroBlock from '../components/HeroBlock';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/Seo';

export default function Home() {

  return (

    <Layout>
      <Seo 
        lang="en"
        description=""
        title="Contact details"
      />
      <HeroBlock 
        bgcolor="brandSecondary" 
        imagealign="right"
        image={<StaticImage src="../images/gomed-logo-wide.png" alt="GoMed" />}
        content={(
          <>

            <h1>Contact details</h1>
          </>
        )}        
      >
      </HeroBlock>
    </Layout>

  )

}
