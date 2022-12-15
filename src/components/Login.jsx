import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import './Login.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { Modal,Button,Spinner} from 'react-bootstrap'
import {createRoot} from 'react-dom/client'

const Login = (props) => {
  console.log(props)
  const navigate = useNavigate()

  // state and handlers for response modals
  const [show, setShow] = useState(false)
  const [variant, setVariant] = useState('success')
  const handleClose = () => {
    setShow(false)
    if(variant==='success'){
      navigate('/profile')
    }
    const root = createRoot(document.querySelector('#sub'))
    root.render(<>Login</>)
  }
  const handleShow = () => {
      return new Promise((resolve,reject)=>{
          setShow(true)
          setTimeout(resolve,50)
      })
  }

  useEffect(()=>{
      document.querySelector('#sub').addEventListener('click',(e)=>{
      e.preventDefault()
    })
  },[])
  const login = ()=>{
    const spinner = (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>)
    console.log(spinner)
    const root = createRoot(document.querySelector('#sub'))
    root.render(spinner)
    const id = document.querySelector('#id').value
    const pwd = document.querySelector('#pwd').value
    axios({
      method:'post',
      url:'https://api.interplanetarybankingsystem.org/login',
      headers:{
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      data:{
        id:id,
        pwd:pwd
      }
    }).then(result=>{
        if(result.status>=200&&result.status<300){
          setVariant('success')
        }
        else{
          setVariant('danger')
        }
        var title = document.createTextNode(result.statusText)
        var info = document.createTextNode(result.data.msg)
        //navigate('/profile')
        console.log(result)
        const user = result.data.user
        props.success(user,id)
        handleShow().then(()=>{
          document.getElementById('response-modal-title').appendChild(title)
          document.getElementById('response-modal-info').appendChild(info)
          console.log(title)
          console.log(info)
        })
      })
      .catch(err=>{console.log(err)
        setVariant('danger')
        var title =''
        var info = ''
        try{
          var title = document.createTextNode(err.response.statusText )
          var info = document.createTextNode(err.response.data.warning||err.response.data.msg)
        }
        catch{
          title = document.createTextNode('Error')
          info = document.createTextNode('Please check your input and network')
        }
        handleShow().then(()=>{
          document.getElementById('response-modal-title').appendChild(title)
          document.getElementById('response-modal-info').appendChild(info)
          console.log(title)
          console.log(info)
        })
      })
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

      <div className="col-lg-5 mb-5 mb-lg-0 position-relative">
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
              
                </div>
                <div className="col-md-6 mb-4">
                 
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="id" className="form-control" placeholder='someone@example.com' />
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="pwd" className="form-control" placeholder='Password' />
              </div>
                <div className='d-grid gap-2 col-6 mx-auto'>
                <button id='sub' className="btn btn-block mb-4" onClick={login}>
                Login
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
    {/*Modal for displaying response */}
    <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}
            >
            <Modal.Header closeButton>
                <Modal.Title id="response-modal-title">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p id='response-modal-info'>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={variant} onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    success: (name,id)=> dispatch( {type:'authenticated',payload:{name,id}} )
  }
}

export default connect(()=>{return {}},mapDispatchToProps)(Login)