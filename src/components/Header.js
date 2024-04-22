
import FoodFireLogo from "../Images/FoodFireLogo.png"; 
import "../index.css"; 
import { useState } from "react";
const Title = () => (
    <a href="/">
      <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
    </a>
  );
 
 const Header = () => {
    const [btName , setBtName] = useState("Login");
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button className="login" onClick={()=>{
                        if(btName === "Login"){
                            setBtName("Logout");
                        }else {
                            setBtName("Login");
                        }
                    }}>{btName}</button>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;