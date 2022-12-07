import './Home.css'

import React from 'react'

const Home = () => {
  return (
    <div id='home'>
      <div className="mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 id='home-h1' className="my-5 fw-bold ls-tight" style={{color: "#fca311", fontSize:'4.5rem'}}>
        Inter-Planetary <br></br>
          <span style={{color: "#1d3557"}}>Banking System</span>
        </h1>
        <p id='para' className="mb-4 opacity-70" style={{color: "#000000"}}>
          Welcome to the Inter-Planetary Banking System. Take your first step towards your financial freedom.
          Regain full control over your financial assets. Once again, <br/>Welcome to the <b>Free World!</b><br/>
        </p>
      </div>
      <div className="mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 id='home-h2' className="my-5 fw-bold ls-tight" style={{color: "#fca311", fontSize:'3.5rem'}}>
        Why
          <span style={{color: "#1d3557"}}> IPBS?</span>
        </h1>
        <p id='para' className="mb-4 opacity-70" style={{color: "#000000"}}>
          IPBS runs on a fully decentralised Blockchain Network, equipped with security and speed.
          Unlike any contemporary bank, at IPBS, users can exercise full authority over their financial assets. There
          is no authority to set restrictions regarding your withdrawls and tranfers. Liberty lies within the user to utilise 
          funds to their responsibility and convinience. The IPBS is designed for absolutely <b>zero downtime!</b>
        </p>
      </div>
      <div className="mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 id='home-h2' className="my-5 fw-bold ls-tight" style={{color: "#fca311", fontSize:'3.5rem'}}>
        Getting
          <span style={{color: "#1d3557"}}> Started</span>
        </h1>
        <p id='para' className="mb-4 opacity-70" style={{color: "#000000"}}>
          The journey begins by registring yourself as a new user. The extent of decentralization is in control of the user.
          
        </p>
      </div>
    </div>
  )
}

export default Home