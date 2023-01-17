import Layout from 'hocs/layouts/Layout'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'
import Header from 'components/services/Header'

function Services() {
  window.scrollTo(0, 0);
  return (
    <Layout>
      <Navbar/>
      <div className='pt-28'>
        <Header/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Services
