import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectSubtotalPrice } from "../../features/cartSlice";
import Button from "../ui/Button";
import ItemsInCart from "../cart/ItemsInCart";

const Order = () => {
  const itemsInCart = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotalPrice);

  return (
    <div className="py-[64px]">
      <h1 className="text-[36px] font-[600] mb-[48px] text-center">
        Your shopping cart
      </h1>
      <div className="flex flex-col gap-[60px]">
        <ItemsInCart />

        <div className="pl-[100px] text-[20px] self-center">
          <div className="mb-[40px]">
            {itemsInCart.length} products{" "}
            <span className="font-[650]">{subtotal} £</span>
          </div>
          <Button>Place an order</Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
