import Layout from 'hocs/layouts/Layout'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'
import { useEffect } from 'react'
import Header from 'components/careers/Header'
import Testimonial from 'components/careers/Testimonial'
import LogoCloud from 'components/home/LogoCloud'
import Features from 'components/careers/Features'
import PositionsList from 'components/careers/PositionsList'

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className='pt-28'>
        <Header/>
        <Testimonial/>
        <div className=" mx-auto lg:mx-12 pt-24">
          <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-gray-900">Work with top notch companies
          </h3>
        </div>
        <LogoCloud/>
        <Features/>
        <PositionsList/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Careers
