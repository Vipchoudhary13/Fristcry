import { IoIosArrowBack } from 'react-icons/io';
import "../../style/signup.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { createAccount } from '../../redux/action';

export const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()

      function handleSignup(e) {
        e.preventDefault()
        dispatch(createAccount(emailRef.current.value, passwordRef.current.value))
        
        // setTimeout(() => {
        //     alert("Your Account is created successfully")
        // }, 500) 
        // if(auth){
        // } 
      }
      const { auth, error } = useSelector((state) => ({
        auth: state.userState.auth,
        error: state.userState.error 
      }));
      console.log(auth, error);

      useEffect(() => {
        checkUser()
    }, [auth]);
    const checkUser = ()=>{
        if(auth){
            alert("Your account created successfully")
            navigate("../")
        }
    }
    return <div className='signup-main-cont'>
        {/* <img id='signup-top-logo' src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" /> */}
        <div className='signup-cont'>
            <div className='signup-resister'>
                <IoIosArrowBack id='back-arr'/>
                <p>Resister</p>
            </div>
            <label>Full Name</label><br/>
            <input id="name" type="text" placeholder='Enter your Full Name' /><br/><br/>

            <label>Email ID</label><br/>
            <input id='email' type="email" ref={emailRef} placeholder='Enter your Email ID' /><br/><br/>
            
            <label>Password</label><br/>
            <input  id='pass' type="password"  ref={passwordRef} placeholder='Enter your Password'/><br/>
            <p id='signup-pass-ins'>Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.</p>

            {error && <p className="login-error">{error}</p>}

            <button  id='signup-btn' onClick={handleSignup} >CONTINUE</button><br/>
            
            <a id='move-signin'><Link to="../signin">Sign In</Link></a>
        </div>
    </div>
}