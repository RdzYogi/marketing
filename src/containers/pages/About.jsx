import Layout from 'hocs/layouts/Layout'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'
import { useEffect } from 'react'
import Header from 'components/about/Header'
import TestStats from 'components/about/TestStats'
import Images from 'components/about/Images'
import OurClients from 'components/about/OurClients'
import LogoCloud from 'components/home/LogoCloud'
import Features from 'components/about/Features'
import Team from 'components/about/Team'
import CTA from 'components/about/CTA'


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className='pt-28'>
        <Header/>
        <TestStats/>
        <Images/>
        <OurClients/>
        <LogoCloud/>
        <Features/>
        <Team/>
        <CTA/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default About
