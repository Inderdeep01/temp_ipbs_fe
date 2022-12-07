import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import './Profile.css'
const Profile = (props) => {
    const navigate = useNavigate()
    useEffect(()=>{
        document.querySelectorAll('.profile-btns')
            .forEach(btn=>{
                btn.addEventListener('click',(e)=>{
                    e.preventDefault()
                })
            })
    })
    const logout=()=>{
        props.logOut()
        navigate('/login')
    }
  return (
    <div id='profile-container'>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-dark profile-btns" type="button">Change Password</button>
            <button className="btn btn-warning profile-btns" type="button" onClick={logout}>Logout</button>
            <button className="btn btn-danger profile-btns" type="button">Delete Account</button>
        </div>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        logOut: ()=> dispatch( {type:'loggedOut'} )
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Profile)