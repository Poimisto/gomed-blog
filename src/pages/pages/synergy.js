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
      <h1>Men are Transforming Their Love Life with This Special Coffee Blend</h1>

      <HeroBlock 
        bgcolor="brand" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/synergy-1.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Boosting Confidence and Enhancing Intimacy</h3>
            <p>
              We understand how critical confidence and intimacy are to your relationships. Confidence isn't just about performance, it's about communication and authenticity with your partner. 
            </p>
            <p>
              It's perfectly okay to want a little boost in this area. That's where Synergy Coffee For Men comes in, formulated to address your concerns and help you reclaim your confidence. By doing so, we hope you'll find your relationships more satisfying, more intimate, and more joyful.
            </p>

          </>
        )}        
      />
      <HeroBlock 
        bgcolor="brand" 
        imagealign="left"
        image={<StaticImage src="../../../content/images/synergy-2.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Improving Vitality with Natural Remedies</h3>
            <p>
              The unique blend of natural herbs is tailored to boost your vitality, helping you reclaim your zest for life and energy levels.
            </p>
            <p>
              With the power of natural herbs known for their beneficial effects, the aim is to minimize potential side effects. Your wellness journey is important to us, and we're here to support you every step of the way.
            </p>

          </>
        )}        
      />

      <HeroBlock 
        bgcolor="lightest" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/synergy-coffee-tp.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Synergy Coffee for Men By HALE AND HEARTY PHARMACY</h3>
            <p>
              Many men have shared their positive experiences with Synergy Coffee for Men, reporting improved sexual performance and overall satisfaction. 
            </p>
            <p>
              Don't just take their word for it - give it a try and see the benefits for yourself!
            </p>
            <CallToAction bgColor="brand" url="https://gomed.ng/p/7289-synergy-coffee-for-men/" align="full-width">Visit our ecommerce website</CallToAction>

          </>
        )}        
      />


      <HeroBlock 
        bgcolor="lightest" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/synergy-cocoa-tp.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h2>But it's not just a coffee...</h2>
            <p>
              If you prefer cocoa or tea over coffee, don't worry, we got you covered.
            </p>
            <CallToAction bgColor="brand" url="https://gomed.ng/p/5107-synergy-cocoa/" align="full-width">Synergy Cocoa for men</CallToAction>
 
            <CallToAction bgColor="brand" url="https://gomed.ng/p/7289-synergy-lemon-tea/" align="full-width">Synergy Lemon Tea for men</CallToAction>


          </>
        )}        
      />

      <HeroBlock 
        bgcolor="light" 
        imagealign="right"
        image={<StaticImage src="../../../content/images/pharmacist-smiling.png" alt="GoMed - get all your meds on the go" />}
        content={(
          <>
            <h3>Get help from our team</h3>
            <p>
              For men, dealing with issues like erectile dysfunction, low libido, or fertility problems can have a profound effect on their overall well-being. 
            </p>
            <p>
              There's absolutely nothing wrong in reaching out for help.  As part of our commitment to your wellness, GoMed offers access to licensed doctors and pharmacists for personalized advice.
            </p>

            <p><a href="/demystifying-male-sexual-health">Read more: Demystifying Male Sexual Health - More Than Just a Physical Aspect</a></p>

            <CallToAction bgColor="brand" url="https://gomed.ng/Speak-a-pharmacist/" align="full-width">Consult a doctor</CallToAction>
            <CallToAction bgColor="brand" url="https://gomed.ng/consult-a-doctor/?page=1" align="full-width">Speak with a Pharmacist</CallToAction>
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
