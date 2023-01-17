import Layout from 'hocs/layouts/Layout'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'
import Header from 'components/cases/Header'
import CasesList from 'components/cases/CasesList'

function Cases() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-28'>
        <Header/>
        <CasesList/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cases
