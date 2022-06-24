import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../redux/action";

export const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef()
    const passwordRef = useRef()

      function handleSignin(e) {
        e.preventDefault()
          dispatch(login(emailRef.current.value, passwordRef.current.value))
          if(auth) navigate("../")
      }

      const { auth, error } = useSelector((state) => ({
        auth: state.userState.auth,
        error: state.userState.error 
      }));
      console.log(auth, error);
    return <div className='signup-main-cont'>
        {/* <img id='signup-top-logo' src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" /> */}
        <div className='signup-cont'>
            <div className='signup-resister'>
                <h3>Login / Resister</h3>
            </div>
            <label>Email ID</label><br/>
            <input type="email" ref={emailRef} placeholder='Enter your Email ID' /><br/><br/>
            <label>Password</label><br/>
            <input type="password"  ref={passwordRef} placeholder='Enter your Password'/><br/>

            {error && <p className="login-error">{error}</p>}

            <button id='signup-btn' onClick={handleSignin}>CONTINUE</button><br/>
            
            <a id='move-signp'><Link to="../signup">Resister Here</Link></a>
        </div>
    </div>
}