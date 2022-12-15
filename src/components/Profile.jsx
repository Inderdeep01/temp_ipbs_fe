import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { Modal,Button,Form } from 'react-bootstrap'
import axios from 'axios'
import './Profile.css'

const Profile = (props) => {
    // state and handlers for delete
    const [showDelete,setShowDelete] = useState(false)
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    // state and handlers for logout
    const [showLogout,setShowLogout] = useState(false)
    const handleCloseLogout = () => setShowLogout(false)
    const handleShowLogout = () => setShowLogout(true)

    //state and handlers for change password
    const [showChange,setShowChange] = useState(false)
    const handleCloseChange = () => setShowChange(false)
    const handleShowChange = () => setShowChange(true)

    //state and handlers for response modal
    const [show, setShow] = useState(false)
    const [variant, setVariant] = useState('success')
    const handleClose = () => setShow(false)
    const handleShow = () => {
        return new Promise((resolve,reject)=>{
            setShow(true)
            setTimeout(resolve,50)
        })
    }

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
        handleCloseLogout()
        navigate('/login')
    }
    const update=()=>{
        handleCloseChange()
        const newpwd = document.querySelector('#newpwd').value
        const oldpwd = document.querySelector('#oldpwd').value

        axios({
            method:'post',
            url:'https://api.interplanetarybankingsystem.org/changePwd',
            headers:{
              'content-type':'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            data:{
              id: props.id,
              oldPwd: oldpwd,
              newPwd: newpwd
            }
        }).then(result=>{
            console.log(result)
            if(result.status>=200&&result.status<300){
                setVariant('success')
            }
            else{
                setVariant('danger')
            }
            var title = document.createTextNode(result.statusText)
            var info = document.createTextNode(result.data.msg)
            handleShow().then(()=>{
                document.getElementById('response-modal-title').appendChild(title)
                document.getElementById('response-modal-info').appendChild(info)
                console.log(title)
                console.log(info)
            })
        })
        .catch(err=>{
            setVariant('danger')
            var title = document.createTextNode(err.response.statusText || 'Error')
            var info = document.createTextNode(err.response.data.msg || 'Could not update password')
            handleShow().then(()=>{
                document.getElementById('response-modal-title').appendChild(title)
                document.getElementById('response-modal-info').appendChild(info)
                console.log(title)
                console.log(info)
            })
        })
    }
    const deleteUser = ()=>{
        handleCloseDelete()
        navigate('/signup')
        props.logOut()
        axios({
            method:'delete',
            url:'https://api.interplanetarybankingsystem.org/delete',
            headers:{
              'content-type':'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            data:{
              id:props.id
            }
        })}
  return (
    <>
        <div id='profile-container'>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark profile-btns" type="button" onClick={handleShowChange}>Change Password</button>
                <button className="btn btn-warning profile-btns" type="button" onClick={handleShowLogout}>Logout</button>
                <button className="btn btn-danger profile-btns" type="button" onClick={handleShowDelete}>Delete Account</button>
            </div>
        </div>
        {/* Modal for Delete */}
        <Modal 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deleting account will delete all the data associated with this account.
            This action cannot be reversed!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
        </Modal>
        {/* Modal for Logout */}
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showLogout} onHide={handleCloseLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Logout?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to  logout from your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseLogout}>
            Nope
          </Button>
          <Button variant="warning" onClick={logout}>
            Logout
          </Button>
        </Modal.Footer>
        </Modal>
        {/* Modal for Change Password */}
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showChange} onHide={handleCloseChange}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" >
              <Form.Control
                id="oldpwd"
                type="password"
                placeholder="Old Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="newpwd"
                type="password"
                placeholder="New Password"
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChange}>
            Nope
          </Button>
          <Button variant="dark" onClick={update}>
            Update
          </Button>
        </Modal.Footer>
        </Modal>
        {/* Modal for diplaying response */}
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
    </>
  )
}

const mapStateToProps=(state)=>{
    return {
        id: state.auth.id
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        logOut: ()=> dispatch( {type:'loggedOut'} )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)