import "../../style/fashion.css";
import { GrDeliver } from 'react-icons/gr';
import { AiFillCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, FilterPrice } from "../../redux/action";

export const Fashion = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => ({
        data: state.dataState.data
    }));

    const Price = () => {
        dispatch(FilterPrice())
    }

    useEffect(($) => {
        dispatch(getData(page));
        setLoading(true)
    }, [page]);
    return <div className="fasion-main-cont">
        <p className="fashion-top-ptag">Home / Clothes & Shoes </p>
        <div className="fashion-big-cont">
            <div className="fashion-left-cont">
                <p><span><GrDeliver /></span>&nbsp;CHECK DELIVERY DETAILS</p>
                <input className="fashion-pin-code" type="text" placeholder="Enter Pin Code" />
                <div className="fashion-left-flex">
                    <p>FILTER BY</p>
                    <p>Clear All</p>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">DELIVERY TIME</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st1">
                    <li><input type="checkbox" /><label>Next Day Delivery (0)</label></li>
                    <li><input type="checkbox" /><label>Same Day Delivery (0)</label></li>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">AGE</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st">
                    <li><input type="checkbox" /><label>0-3 Months (744)</label></li>
                    <li><input type="checkbox" /><label>3-6 Months (713)</label></li>
                    <li><input type="checkbox" /><label>6-9 Months (699)</label></li>
                    <li><input type="checkbox" /><label>9-12 Months (696)</label></li>
                    <li><input type="checkbox" /><label>12-18 Months (402)</label></li>
                    <li><input type="checkbox" /><label>18-24 Months (334)</label></li>
                    <li><input type="checkbox" /><label>2-4 Years (807)</label></li>
                    <li><input type="checkbox" /><label>4-6 Years (700)</label></li>
                    <li><input type="checkbox" /><label>6-8 Years (606)</label></li>
                    <li><input type="checkbox" /><label>8-10 Years (619)</label></li>
                    <li><input type="checkbox" /><label>10-12 Years (515)</label></li>
                    <li><input type="checkbox" /><label>12+ Years (498)</label></li>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">TYPE</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st">
                    <li><input type="checkbox" /><label>Towel & Wrappers (527)</label></li>
                    <li><input type="checkbox" /><label>Hand & Face Towels (36)</label></li>
                    <li><input type="checkbox" /><label>Towel Sets (70)</label></li>
                    <li><input type="checkbox" /><label>Bath Poncho (13)</label></li>
                    <li><input type="checkbox" /><label>Bath Robe (0)</label></li>
                    <li><input type="checkbox" /><label>Organic Clothing (0)</label></li>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">FEATURES</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st">
                    <li><input type="checkbox" /><label>Towel Set (369)</label></li>
                    <li><input type="checkbox" /><label>Poncho With Hood (19)</label></li>
                    <li><input type="checkbox" /><label>Towel With Hood (0)</label></li>
                    <li><input type="checkbox" /><label>Bath Robe With Hood (0)</label></li>
                    <li><input type="checkbox" /><label>Half Sleeves Bathrobe (0)</label></li>
                    <li><input type="checkbox" /><label>Full Sleeves Bathrobe (0)</label></li>
                    <li><input type="checkbox" /><label>3/4th Sleeves Bathrobe (0)</label></li>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">PRICE</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st">
                    <li><input onClick={Price} type="checkbox" /><label>&#8377; 0 to 250 (54)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 250 to 500 (137)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 500 to 1000 (285)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 1000 to 2000 (130)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 2000 to 3000 (0)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 5000 and above (0)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 4000 to 5000 (0)</label></li>
                    <li><input type="checkbox" /><label>&#8377; 3000 to 4000 (0)</label></li>
                </div>
                <hr />
                <div className="dropdown-flex">
                    <h4 className="left-option">COLORS</h4>
                    <AiFillCaretDown className="dropdown-arrow" />
                </div>
                <div className="st">
                    <li><input type="checkbox" /><label>Blue(83)</label></li>
                    <li><input type="checkbox" /><label>Multi Color(162)</label></li>
                    <li><input type="checkbox" /><label>Pink(34)</label></li>
                    <li><input type="checkbox" /><label>White(109)</label></li>
                    <li><input type="checkbox" /><label>Green(24)</label></li>
                    <li><input type="checkbox" /><label>Yellow(22)</label></li>
                    <li><input type="checkbox" /><label>Red(61)</label></li>
                    <li><input type="checkbox" /><label>Grey(34)</label></li>
                    <li><input type="checkbox" /><label>Purple/Violet(26)</label></li>
                    <li><input type="checkbox" /><label>Peach(2)</label></li>
                    <li><input type="checkbox" /><label>Brown(20)</label></li>
                    <li><input type="checkbox" /><label>Orange(4)</label></li>
                    <li><input type="checkbox" /><label>Black(10)</label></li>
                </div>
                <hr />
            </div>
            <div className="fashion-left-cont">
                <h1>Fashion</h1>
                <div className="fashion-cont1">
                    <p>Shop from 66888 Tops and T-shirts online at FirstCry.com with prices starting at Rs. 81.</p>
                    <hr />
                    <p>GENDER: <span>Unisex </span></p>
                    <hr />
                    <div className="fashion-cont2">
                        {data.map((e) => {
                            return (
                                <div className="fashion-cont3" onClick={() => {
                                    localStorage.setItem("product", JSON.stringify(e))
                                    navigate("../product")
                                }}>
                                    <img id="fashion-logo" src={e.img} />
                                    <p>{e.details}</p>
                                    <div className="fashion-grid">
                                        <p>&#8377; {e.price}</p>
                                        <p className="line-cut">&#8377; {e.amount}</p>
                                        <p className="fashion-offer">({e.discount}%OFF)</p>
                                    </div>
                                    <img className="fashion-product-logo" src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" />
                                </div>
                            )
                        })}
                        {loading ? <div className="fashion-next-back-btn-cont">
                            <button className="fashion-next-btn" onClick={() => {
                                setPage(page - 1);
                            }}>Prev</button>
                            <button className="fashion-next-btn fashion-back-btn" onClick={() => {
                                setPage(page + 1);
                            }}>Next</button>
                        </div> : "Loading..."}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

