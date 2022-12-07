import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  console.log('navbar')
  console.log(props)
  var rightComponent = (
    <>
    <Link to='/login'><button id='login' className='btn'><i className="fa-sharp fa-solid fa-user-tie"></i>&nbsp; Login</button></Link>
    <Link to='/signup'><button id='signup' className='btn'><i className="fa-solid fa-user-plus"></i>&nbsp;Sign Up</button></Link>
    </>
  )
  if(props.auth.isLoggedIn){
    rightComponent = (
      <>
      <Link to='/profile'><button id='login' className='btn'><i className="fa-sharp fa-solid fa-user-tie"></i>&nbsp; {props.auth.name}</button></Link>
      </>
    )
  }
  return (
    <div>
        <nav id='navbar' className="navbar"> 
            <Link to='/' style={{textDecoration:'none'}}><a className="navbar-brand" href="#navbar" id="logo-text">
                <i className="fa-solid fa-globe" id="logo"></i>
                    IPBS
            </a></Link>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" id='auth'>
                {rightComponent}
            </div>
        </nav>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps,()=>{return {}})(Navbar)