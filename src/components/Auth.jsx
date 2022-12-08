import React,{useEffect} from 'react'
import './Auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

const Auth = (props) => {
  const navigate = useNavigate()
  useEffect ( ()=>{
    const sub = document.querySelector('#sub')
    sub.addEventListener('click',(e)=>{
    e.preventDefault()
  })
  },[])
  const signup = ()=>{
    const id = document.querySelector('#id').value
    const pwd = document.querySelector('#pwd').value
    const fname = document.querySelector('#fname').value
    const lname = document.querySelector('#lname').value
    axios({
      method:'post',
      url:'http://localhost:3010/signup',
      headers:{
        'content-type':'application/json'
      },
      data:{
        id:id,
        pwd:pwd,
        fname,
        lname
      }
    }).then(result=>{
        props.success(fname?fname:'User',id)
        navigate('/')
        console.log(result)
      })
      .catch(err=>console.log(err))
  }
  return (
    <div id='main'>
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 id='h1' className="my-5 display-5 fw-bold ls-tight" style={{color: "#fca311", fontSize:'4rem'}}>
        Inter-Planetary<br />
          <span style={{color: "#1d3557"}}>Banking System</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: "#000000"}}>
          
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="fname" className="form-control" placeholder='First Name' />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="lname" className="form-control"  placeholder='Last Name'/>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="id" className="form-control" placeholder='someone@example.com' />
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="pwd" className="form-control" placeholder='Password' />
              </div>
                <div className='d-grid gap-2 col-6 mx-auto'>
                <button id='sub' type="submit" className="btn btn-block mb-4" onClick={signup}>
                Sign up
              </button>
                </div>
              
              

              <div className="text-center">
                <p>or</p>
                <button type="button" className="btn btn-link btn-floating mx-1 social">
                <i className="fa-solid fa-wallet"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1 social">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1 social">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1 social">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    success: (name,id)=> dispatch( {type:'authenticated',payload:{name,id}} )
  }
}

export default connect(()=>{return {}},mapDispatchToProps)(Auth)