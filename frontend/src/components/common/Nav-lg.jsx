import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../utils/context";

function NavLg() {
    const {activePage} = useContext(HeaderContext);
    return (
        <div className="nav-lg">
            <nav>
                <ul className="">
                    <li className={ activePage === "home" ? "active" : "" }><Link to="/">HOME</Link></li>
                    <li className={ activePage === "faq" ? "active" : "" }><Link to="/faq">ABOUT</Link></li>
                    <li className={ activePage === "catalog" ? "active" : "" }><Link to="/catalog">SHOP</Link></li>
                    <li className={ activePage === "blog" ? "active" : "" }><Link to="/blog">BLOG</Link></li>
                    <li className={ activePage === "contact" ? "active" : "" }><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLg;