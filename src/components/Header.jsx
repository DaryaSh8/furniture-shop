import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Cart from "./cart/Cart";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsInCart = useSelector(selectCartItems);

  return (
    <header className="font-[400] sticky top-[0px] z-[3] bg-white py-[15px] px-[10px]">
      <div className="flex items-center justify-between relative flex-wrap">
        <Link to="/" className="text-[30px] font-bold hover:text-[#2A254B]">
          HOUSE STAFF
        </Link>

        <div className="flex items-center justify-between relative">
          {itemsInCart.length ? (
            <HiMiniShoppingCart
              className="cursor-pointer text-[#2A254B] hover:text-[#4E4D93]"
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
          ) : (
            <RiShoppingCart2Line
              className="cursor-pointer  text-[#2A254B] "
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
          )}

          <div className="flex text-[18px]">
            <Link to="about" className="ml-[44px] hover:text-[#4E4D93]">
              ABOUT US
            </Link>
            <Link to="contacts" className="ml-[44px] hover:text-[#4E4D93]">
              CONTACTS
            </Link>
          </div>
        </div>

        <>{isOpen && <Cart onClose={() => setIsOpen(false)} />}</>
      </div>
    </header>
  );
};

export default Header;
