import React from 'react'
import './Auth.css'

const Auth = () => {
  return (
    <div id='main'>
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 id='h1' class="my-5 display-5 fw-bold ls-tight" style={{color: "#fca311", fontSize:'4rem'}}>
        Inter-Planetary<br />
          <span style={{color: "#1d3557"}}>Banking System</span>
        </h1>
        <p class="mb-4 opacity-70" style={{color: "#000000"}}>
          
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <form>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" placeholder='First Name' />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control"  placeholder='Last Name'/>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" placeholder='someone@example.com' />
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" placeholder='Password' />
              </div>
                <div className='d-grid gap-2 col-6 mx-auto'>
                <button id='sub' type="submit" class="btn btn-block mb-4 ">
                Sign up
              </button>
                </div>
              
              

              <div class="text-center">
                <p>or</p>
                <button type="button" class="btn btn-link btn-floating mx-1 social">
                <i class="fa-solid fa-wallet"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 social">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 social">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 social">
                  <i class="fab fa-github"></i>
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

export default Auth