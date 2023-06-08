import React from 'react';
import HeroBlock from '../../components/HeroBlock';
import CallToAction from '../../components/CallToAction';
import LatestPosts from '../../components/LatestPosts';
import Layout from '../../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../../components/Seo'

export default function Home() {

  return (

    <Layout>
      <Seo 
        lang="en"
        description="GoMed - get all your meds on the go"
        title="Key supplements - trying to conceive"
      />
      <h1>Making Your Dreams of Motherhood Come True</h1>

      <HeroBlock 
        bgcolor="light" 
        imagealign="left"
        image={<StaticImage src="../../../content/images/ovacare.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Key Supplements for Women Trying to Conceive</h3>
            <p>
              These supplements can help prepare your body for pregnancy and promote the healthy development of your baby.
            </p>
            <p>
              <a href="https://gomed.ng/p/7284-ova-care-tablets-x30/?page=1">OVA CARE TABLETS</a> contain strong folic acid elements and other compounds like Inositol and L-Arginine to improve ovarian function and increase pregnancy rates.
            </p>
            <p>
              <a href="https://gomed.ng/p/6780-eu-natural-conception-for-her-x-60-caps/?page=1">CONCEPTION FOR HER</a> is formulated with clinically validated ingredients including Myo-Inositol, Chaste Tree Berry, KSM-66® Ashwagandha Extract, Shatavari Root Extract and more.
            </p>
 
          </>
        )}        
      />

      <HeroBlock 
        bgcolor="light" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/predicte.jpg" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Understanding Ovulation and Your Fertility Window</h3>
            <p>
              Timing is everything. The fertility window, or the optimal time for conception, usually spans a few days in each menstrual cycle. 
            </p>
            <p>
              <a href="https://gomed.ng/p/3022-predicte-ovulation-strip/?page=1">PREDICTE OVULATION STRIP</a> By SPRINGCARE PHARMACY can help you identify the most fertile days during your monthly cycle.
            </p>
          </>
        )}        
      />

      <HeroBlock 
        bgcolor="lightest" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/pharmacist-smiling.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Get help from our team</h3>
            <p>
              Starting a family can be one of the most rewarding life experiences.
            </p>
            <p>
               But the journey towards becoming a parent can sometimes feel difficult.
            </p>
            <p>
              It's important to consult with a healthcare professional if you have questions and before you start any supplement regimen. 
            </p>
            <p>
              GoMed has a team of professional pharmacists available via chat to answer any questions and help guide you in your journey to motherhood.
            </p>
            <p><a href="/preparing-for-pregnancy-guide">Read our comprehensive Guide to Preparing for Pregnancy</a></p>

            <CallToAction bgColor="brand" url="https://gomed.ng/consult-a-doctor/" align="full-width">Consult a doctor</CallToAction>
            <CallToAction bgColor="brand" url="https://gomed.ng/Speak-a-pharmacist/" align="full-width">Speak with a Pharmacist</CallToAction>
          </>
        )}        
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
        )}        
      />
    </Layout>

  )

}
