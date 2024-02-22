import { useSelector } from "react-redux";
import { selectCartItems, selectSubtotalPrice } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ItemsInCart from "./ItemsInCart";

const Cart = ({ onClose }) => {
  const itemsInCart = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotalPrice);

  return (
    <>
      <div className="absolute bg-white max-w-[700px] w-full right-0 top-full p-[40px]  border z-[10]">
        {itemsInCart.length > 0 ? (
          <>
            <div className="overflow-y-scroll max-h-[500px]">
              <ItemsInCart />
            </div>

            <hr className="text-[#2A254B] opacity-[0.5] my-[60px]" />

            <div className="flex justify-between items-center">
              <span className="text-[20px]">
                Subtotal: <span className="font-bold">{subtotal} £</span>
              </span>
              <Link onClick={onClose} to="order">
                <Button>To order</Button>
              </Link>
            </div>
          </>
        ) : (
          <span className="font-[600] text-[20px]">EMPTY</span>
        )}
      </div>
      <div className="fixed inset-0 bg-gray-900/50" onClick={onClose}></div>
    </>
  );
};

export default Cart;
