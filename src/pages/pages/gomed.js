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
        title="GoMed Blog"
      />
      <HeroBlock 
        bgcolor="brand" 
        content={(
          <>
            <h1>GoMed offers a quick & safe way to shop pharmacy products online</h1>
            <ul>
              <li>
                Speed and convenience - have your items delivered straight to your doorstep.
              </li>  
              <li>
                Shop online safely  - shop from the established Nigerian pharmacies you already trust and pay on delivery
              </li>
              <li>
                Over 5000 pharmacy products available - shop over the counter & prescription medicines and other pharmacy products 
              </li>
            </ul>
          </>
        )}        
      />
 
      <HeroBlock 
        bgcolor="light" 
        imagealign="left"
        image={<StaticImage src="../../../content/images/shopping-pharmacy-products-in-nigeria.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h2>Speed and convenience</h2>
            <p>
              You drive 30 minutes to your trusted pharmacy and there you spend another 15 minutes waiting in line - just to find out that they've run out of stock and you need to visit another pharmacy to get your meds.
            </p>
            <p>
              With Gomed, you can easily find your essential products, make your purchase, and <strong>have your items delivered straight to your doorstep</strong>. 
            </p>
            <p>In Lagos, we deliver in the same day and you can pay on delivery.</p>
          </>
        )}        
      >
      </HeroBlock>
      
      <HeroBlock 
        bgcolor="lightest" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/trust-image.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h2>Service you can trust</h2>
            <p>It's hard to trust an online platform the way we trust our local pharmacist. 
            </p>
            <p>With GoMed, every product listed on our platform is sourced directly from these trusted pharmacies, ensuring authenticity and safety.</p>
            <p>We also offer a unique pay-on-delivery option, so you don't need to worry about paying online upfront.
            </p>

          </>
        )}        
      >
      </HeroBlock>

      <HeroBlock 
        bgcolor="brandTertiary" 
        imagealign="left"
        image={<StaticImage src="../../../content/images/product-range.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h2>One click to 5000+ healthcare products</h2>
            <p>
              You can browse through inventory from multiple pharmacies — all in one place. Whether it's baby care items, personal care products, prescription meds, or your favorite vitamins.
            </p>
            <p>
              Our goal is to have everything you need to meet your family's needs.
            </p>

          </>
        )}        
      >
      </HeroBlock>
      
      <h2 style={{textAlign:"center",marginTop:"40px"}}>What our customers say?</h2>

      <StaticImage style={{marginBottom:"40px"}} src="../../../content/images/reviews.jpg" alt="GoMed - get all your meds on the go" />

      <HeroBlock 
        bgcolor="lightest" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/media-collection-2022-12.jpg" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h2>Founded in 2021, with a vision to ensure safe access to medicine</h2>
            <p>Our Mission is to digitize access to safe and affordable health products and services for everyone in Nigeria, improving health outcomes for patients by helping them access the healthcare products that they need.
            </p>
            <p>GoMed is a European owned entity, with the core founders from Finland, the Netherlands, and Nigeria.</p>
    
          </>
        )}        
      >
      </HeroBlock>

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
