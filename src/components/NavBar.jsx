import { useEffect, useState } from "react"

export default function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 50) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },  []);

    return (
        <div className={`nav-bar ${show && "nav__display"}`}>
            <img 
            src="/shopping-bag.png" 
            className="nav-basket"
            alt="the basket icon" 
            />
            
            <img 
            src="/menu.png" 
            className="nav-menu"
            alt="the menu icon" 
            />
        </div>
    )
}