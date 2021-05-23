import React from 'react';
import { auth, provider } from '../firebase';
import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

    const dispatch = useDispatch()

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
  
    const handleSignOut = () => {
      auth.signOut().then(()=>{
        dispatch(setUserLogOutState)
      }).catch((err)=>alert(err.message))
    }  

    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
          dispatch(setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email
          }))
        })
      }

    return (
        <div className="login_container">
          <div className="login_box">
            <button onClick={handleSignIn} ><i class='bx bxl-google' style={{color: "#9b03f8"}}  ></i>  Sign In With Google</button>
          </div>
        </div>
    )
}

export default Login
