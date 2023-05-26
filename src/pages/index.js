import React from 'react';
import HeroBlock from '../components/HeroBlock';
import CallToAction from '../components/CallToAction';
import LatestPosts from '../components/LatestPosts';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/Seo'

export default function Home() {

  return (

    <Layout>
      <Seo 
        lang="en"
        description="GoMed - get all your meds on the go"
        title="GoMed "
      />
      <HeroBlock 
        bgcolor="brand" 

        content={(
          <>
            <h1>GoMed - get all your meds on the go</h1>
            <p>
              Say goodbye to the hassle of getting your pharmacy products in Nigeria. Introducing GoMed - your one-stop-shop for all your pharmacy needs.
            </p>
            <ul>
              <li>
                Quickly search and order from a wide range of products from your nearest community pharmacy
              </li>  
              <li>
                Choose fast delivery or free pickup. 
              </li>
              <li>
                GoMed's chat feature connects you with a highly qualified pharmacist for free
              </li>
              <li>
                GoMed's telemedicine service allows you to consult with licensed doctors. 
              </li>
            </ul>
       
            <CallToAction bgColor="brandSecondary" url="https://gomed.ng" align="left">Visit our ecommerce website</CallToAction>
            <CallToAction bgColor="brandSecondary" url="https://play.google.com/store/apps/details?id=com.GoMed.android&pli=1" align="left">Download our app </CallToAction>
          </>
        )} />  
      


      <LatestPosts maxNumberOfPosts="16" title="Latest posts"/>
    </Layout>

  )

}
