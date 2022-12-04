import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav id='navbar' className="navbar"> 
            <Link to='/' style={{textDecoration:'none'}}><a className="navbar-brand" href="#navbar" id="logo-text">
                <i className="fa-solid fa-globe" id="logo"></i>
                    IPBS
            </a></Link>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" id='auth'>
                <Link to='/login'><button id='login' className='btn'><i className="fa-sharp fa-solid fa-user-tie"></i>&nbsp; Login</button></Link>
                <Link to='/signup'><button id='signup' className='btn'><i className="fa-solid fa-user-plus"></i>&nbsp;Sign Up</button></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar