import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Category from "../Category/Category";
import Language from "../Stateless/Language/Language";
import CartWidget from "../CartWidget/CartWidget";
import MenuHam from "../MenuHam/MenuHam";
import { useCartContext } from "../../contexts/CartContext";

// Images
import MyLogo from "../../img/lt.png";
import HamMenu from "../../img/hammenu.png";
import Close from "../../img/close.png"

const NavBar = ({ notification }) => { 
    const [open, setOpen] = useState(false)
    const { cartList, iconCart } = useCartContext();

    const toggleMenu = () => {
        setOpen(!open)
    }
/* 
    const handleClick = () => {
        window.scrollTo({ top: "1700", behavior: "smooth" });
        }
         */
   
    return (
        <>

        <header className="myHeader navbar"> 
        
            <Link to="/" className="title"> 
                <h1>Bike-Store.</h1>
            </Link>

            <Link to="/" style={{ display: "block", paddingBottom: "1rem" }}> 
                <img src={MyLogo} className="App-logo" alt="Logo" />
            </Link>
        
            <Category />

            <Language />
            {cartList.length < 1 ? (
          " "
        ) : (
          <p style={{fontSize:"20px", color: "yellow", padding: "0 10px" }}>{iconCart()} </p>
        )}
            <Link to="/cart"><CartWidget notification={notification} /></Link>
      

            <button type="button" onClick={toggleMenu} className="navbar menu">
                <img src={open ? Close : HamMenu} alt="Menu"/>
            </button>  

            {open && <MenuHam />}

        </header>      
        
        </>
    );
}

export default NavBar;