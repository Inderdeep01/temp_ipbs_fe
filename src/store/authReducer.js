const initialState = {
    isLoggedIn: false
}

const auth = (state=initialState, action)=>{
    if(action.type === 'authenticated'){
        return {
            isLoggedIn: true,
            name:action.payload.name,
            id:action.payload.id
        }
    }
    if(action.type === 'loggedOut'){
        return {
            isLoggedIn: false
        }
    }
    else{
        return state
    }
}

export default auth