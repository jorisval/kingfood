import { HeaderContext } from "../utils/context";
import { useContext } from "react";
import MenuMd from "./Menu-md";
import ColoredLogo from "../../assets/images/kingfood-logo.png";
import NavLg from "./Nav-lg";
import Search from "./Search";
import Cart from "./Cart";
import Favorite from "./Favorite";

function Header() {
  const { activePage } = useContext(HeaderContext);

  const handleSearchClick = () => {
    document.querySelector('.search .background').style.display = 'block';
    document.querySelector('.search-content').classList.add('show');
  };

  const handleBagPlusClick = () => {
    document.querySelector('.cart .background').style.display = 'block';
    document.querySelector('.cart-content').classList.add('show');
  };

  const handleFavoriteClick = () => {
    document.querySelector('.favorite .background').style.display = 'block';
    document.querySelector('.favorite-content').classList.add('show');
  };

  return (
    <div className={activePage === "home" ? "header home" : "header"}>
      <MenuMd />
      <div className="header__logo">
          <img src={ColoredLogo} alt=""/>
      </div>
      <NavLg />
      <div className="header__butons">
        <div className="header__search">
            <span className="bi bi-search" onClick={handleSearchClick}></span>
        </div>
        <div className="header__cart">
            <span className="bi bi-cart3" onClick={handleBagPlusClick}></span>
        </div>
        <div className="header__favorite">
            <span className="bi bi-heart" onClick={handleFavoriteClick}></span>
        </div>
      </div>
      <Search />
      <Cart />
      <Favorite />
    </div>
  );
}
  
export default Header;
  