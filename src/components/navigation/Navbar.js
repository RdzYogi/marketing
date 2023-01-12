import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import loading_dots from '../../assets/img/loading-dots.gif'
import logo_boom from '../../assets/img/boomslag-black.png'

function Navbar() {
  return (
    <nav className='w-full py-4 top-0 fixed'>
        <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <img
            src={logo_boom}
            alt="logo"
            width={140}
            height={120}
            className=""/>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
          <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Casos</Link>
          <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Servicios</Link>
          <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Nosotros</Link>
          <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Carreras</Link>
          <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Blog</Link>
          <Link to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Contacto</Link>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-l font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire us
              <img
                src={loading_dots}
                className='w-7 h-2 mt-1 ml-2'
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps,{

}) (Navbar)
