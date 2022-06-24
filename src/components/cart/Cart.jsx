import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import "../../style/cart.css";
import { getlocalStorage, removeCartItem } from '../../utils/localStorage';

export const Cart = () => {
    const navigate = useNavigate();
    const [cartProduct, setCartProduct] = useState([]);
    
    useEffect(() => {
        setCartProduct(getlocalStorage("cart"))
    }, [cartProduct])
    let totalAmount = 0;
    let totalPrice = 0;
    cartProduct.forEach(item => {
        totalAmount += +item.amount;
        totalPrice += +item.price;
    })

    return <div className='cart-contaner'>
        {/* <h2>Shopping Cart</h2> */}

        <div className="cart-main-cont">
            <div className="cart-left-cont">
                {cartProduct.map(item => {
                    return <div className="cart-left-top">
                        <div>
                            <div className='cart-move'>
                                <img src={item.img} />
                                <div>
                                    <h4>{item.details}</h4>
                                    <p>Size:<span>9-12m</span></p>
                                    <p>Ideal Weight (Kgs): <span>8.9 - 9.6</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className='cart-move'>
                                <p onClick={$ => removeCartItem(item.img)}><span><RiDeleteBin6Line /></span>&nbsp;REMOVE</p>
                                <p>|&nbsp;&nbsp;&nbsp;&nbsp; MOVE TO SHORTLIST</p>
                            </div>
                        </div>
                        <div className='cart-vertical-line'></div>
                        <div className='cart-right-top'>
                            <h3>&#8377;{item.price}</h3>
                            <p className='cart-mrp'>MRP&nbsp; &#8377;<spna className='cart-price'>{item.amount} </spna><span className='cart-off'>&nbsp; 21%OFF</span></p>
                            <div className='cart-club-price'>
                                <img src='https://cdn.fcglcdn.com/brainbees/checkout/clublogo.png' />
                                <p>Club Price</p>
                            </div>
                            {/* <p>&#8377; 1154.23</p> */}
                            <p>MRP Includes all taxes</p>
                            <p></p>
                        </div>
                    </div>
                })}

                <div className='cart-place-order'>
                    <p onClick={() => {
                        navigate("../address")
                    }} className='cart-delevery'>ADD DELIVERY ADDRESS</p>
                    <div onClick={() => {
                        navigate("../address")
                    }} className='cart-order'>
                        <p>&#8377;{totalPrice}</p>
                        <h5>PLACE ORDER</h5>
                    </div>
                </div>
            </div>
            <div className='cart-right-cont'>
                <h4>Payment Information</h4>
                <div>
                    <p>Value of Product(s)</p>
                    <p>&#8377;{totalAmount}</p>
                </div>
                <div>
                    <p>Discount(-)</p>
                    <p>&#8377;{(totalAmount - totalPrice).toFixed(2)}</p>
                </div>
                <div>
                    <p>Delevery Charge</p>
                    <p>&#8377;50</p>
                </div>
                <hr />
                <div>
                    <p>Total</p>
                    <p>&#8377;{totalPrice + 50}</p>
                </div>
            </div>
        </div>
    </div>
}