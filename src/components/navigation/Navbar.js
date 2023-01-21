import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import loading_dots from '../../assets/img/loading-dots.gif'
import logo_boom from '../../assets/img/boomslag-black.png'
import { useState } from 'react'
import { DotLoader } from 'react-spinners'

function Navbar() {

  const [loading, setLoading] = useState(true)

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.getElementById('navbar')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add('shadow-navbar');
        document.getElementById('navbar').classList.add('bg-white');
      }else{
        document.getElementById('navbar').classList.remove('shadow-navbar');
        document.getElementById('navbar').classList.remove('bg-white');
      }
    }
  }

  return (
    <nav id='navbar' className='w-full py-4 transition duration-300 ease-in-out z-40 top-0 fixed'>
        <div className="hidden lg:block px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img
            src={logo_boom}
            alt="logo"
            width={140}
            height={120}
            className=""/>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
          <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Casos</NavLink>
          <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Servicios</NavLink>
          <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
          <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Carreras</NavLink>
          <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Blog</NavLink>
          <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">Contacto</NavLink>
            <Link
              to={'/contacto'}
              className="inline-flex items-center rounded-md border border-transparent bg-orange-button ml-12 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire Us
              <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps,{

}) (Navbar)
