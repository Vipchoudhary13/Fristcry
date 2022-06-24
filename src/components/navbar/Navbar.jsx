import { GoLocation } from 'react-icons/go';
import { BsCart } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterData, getData, logout } from "../../redux/action";
import "../../style/navbar.css";

export const Navbar = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const filter = (e) => {
    if (key.length > e.target.value.length) {
      dispatch(getData());
    }
    setKey(e.target.value);
    dispatch(FilterData(key));
  };
  
  const { auth, error } = useSelector((state) => ({
    auth: state.userState.auth,
  }));
  const handleClick = () => {
      dispatch(logout())
      navigate("../")
  }
    return <div >
        <div className='navbar-flex top-cont'>
            <div className='navbar-flex'>
                <Link to="../"><img id='logo' src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" /></Link>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                }}>
                    <input
                        value={key}
                        onChange={filter}
                        id='search-box' 
                        type="text" 
                        placeholder="Search for a Category, Brand or Product" />
                </form>
                <div>

                    {/* <AiOutlineSearch id="search-icon" /> */}
                </div>
            </div>
            <div className='navbar-flex'>
                <GoLocation id="location-icon" />
                <p>Select location |&nbsp;</p>
                <p>Stores & Preschools |&nbsp;</p>
                <p>Support |&nbsp;</p>
                <p>Track Order |&nbsp;</p>
                <p>FirstCry Parenting |&nbsp;</p>
                {!auth&&<p><Link id="sin" to="../signin">Login/Resister </Link></p>}
                {auth&&<p onClick={handleClick}>Sign out</p>}
                {/* <p><Link id="sin" to="../signin">Login/Resister |&nbsp;</Link></p> */}
                <p>&nbsp;|&nbsp;Shortlist |&nbsp;</p>
                <BsCart id='cart-icon' onClick={() => {
                    if(auth){
                        navigate("../cart")
                    }else{
                        navigate("../signin")
                    }
                }}/>
                <p onClick={() => {
                      if(auth){
                        navigate("../cart")
                    }else{
                        navigate("../signin")
                    }
                }}>cart</p>
            </div>
        </div>
        <div className='navbar-down-cont'>
            <div className='navbar-down-cont1'>
                <div>
                    <p><Link className='link' to="/fashion">BOY FASHION</Link></p>
                    {/* <Link className='link' to="/fashion">BOY FASHION</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">GIRL FASHION</Link></p>
                    {/* <Link className='link' to="/fashion">GIRL FASHION</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">FOOTWEER</Link></p>
                    {/* <Link className='link' to="/fashion">FOOTWEER</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">TOYS</Link></p>
                    {/* <Link className='link' to="/fashion">TOYS</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">GIRL FASHION</Link></p>
                    {/* <Link className='link' to="/fashion">GIRL FASHION</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">GEAR</Link></p>
                    {/* <Link className='link' to="/fashion">GEAR</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">BATH</Link></p>
                    {/* <Link className='link' to="/fashion">BATH</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">NURSERY</Link></p>
                    {/* <Link className='link' to="/fashion">NURSERY</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">MOMS</Link></p>
                    {/* <Link className='link' to="/fashion">MOMS</Link> */}
                </div>
                <div>
                    <p><Link className='link' to="/fashion">HEALTH</Link></p>
                    {/* <Link className='link' to="/fashion">HEALTH</Link> */}
                </div>
                <img src='https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png' />
                <div id='carter'>
                    <p >carter's</p>
                </div>
            </div>
        </div>
    </div>
}