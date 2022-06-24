import { useNavigate } from "react-router-dom";
import "../../style/address.css";

export const Address = () => {
    const navigate = useNavigate();
    return <div className="address-cont">
        <h2>Save Address</h2>
        <input type="text" placeholder="Full Name" /><br/>
        <input type="text" placeholder="Mobile Number" /><br/>
        <input type="text" placeholder="pincode" /><br/>
        <input type="text" placeholder="City" /><br/>
        <input type="text" placeholder="State" /><br/>
        <input type="text" placeholder="Flat/House No./Bulding" /><br/>
        <input type="text" placeholder="Area/Locality" /><br/>

        <button onClick={() => {
            navigate("../payment")
        }}>CONTINUE</button>
    </div>
}