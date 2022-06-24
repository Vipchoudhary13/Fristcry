import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../style/product.css";
import { setlocalStorage } from '../../utils/localStorage';

export const Product = () => {
    const product = JSON.parse(localStorage.getItem("product"));
    const navigate = useNavigate();
    const { auth, error } = useSelector((state) => ({
        auth: state.userState.auth,
      }));
    const handleClick = () => {
        if(auth){
            setlocalStorage("cart", product)
            alert("Your item add to cart")
        }else{
            navigate("../signin")   
        }
    }
    return <div>
        <p className='product-top-text'>Home / Clothes & Shoes / Shorts, Skirts & Jeans / Babyhug Full Length Solid Trouser - Beige</p>
        <div className="product-main-cont">
            <div className="product-left-cont">
                <img src={product.img} />
            </div>
            <div className="product-right-cont">
                <h2>{product.details}</h2>
                <p>2 to 3 Years, Cool & stylish elastic trouser with draw cord and 2 side pockets for boys
                    Product ID: 10851490<span className="more"> - See Details</span></p>
                <hr />
                <div className='procuct-flex'>
                    <h2>&#8377; {product.price} &nbsp;&nbsp;</h2>
                    <p className='product-flex-ptag'>MRP: <span>&#8377; {product.amount} &nbsp;&nbsp;</span></p>
                    <p className='product-flex-color'>({product.discount}% OFF)</p>
                </div>
                <p className='product-flex-ptag1'>MRP incl. all taxes, Add'l charges may apply on discounted price</p>
                <div className='product-flex2'>
                    <div className=''>
                        <div className='product-flex2-left'>
                            <img src='https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png'/>
                            <p className='product-club'>Club Price</p>
                            <h4 className='product-price'>&#8377; {product.price-20}</h4>
                        </div>
                        <p className='product-saving'>Add'l Club Savings: &#8377;11.98</p>
                    </div>
                    <div className='product-join'>Join Club</div>
                </div>
                <div className='product-size'>
                    <h4>SIZE</h4>
                    <div className='product-size1'>
                        <p>6-9 M</p>
                        <p>9-12 M</p>
                        <p>12-18 M</p>
                        <p>18-24 M</p>
                        <p>2-3 Y</p>
                        <p>3-4 Y</p>
                        <p>4-5 Y</p>
                        <p>5-6 Y</p>
                    </div>
                </div>
                <hr/>
                <div className='procuct-flex1'>
                    <div onClick={handleClick} className='addto-cart'>ADD TO CART</div>
                    <div className='addto-cart shortlist'>SHORTLIST</div>
                </div>
            </div>
        </div>
    </div>
}