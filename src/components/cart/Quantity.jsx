import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductCount,
  incrementProductCount,
  selectProductCount,
} from "../../features/cartSlice";

const Quantity = ({ product }) => {
  const productCartCount = useSelector((state) =>
    selectProductCount(state, product.id),
  );
  const canIncrement = productCartCount < product.quantity;
  const dispatch = useDispatch();

  return (
    <div className="">
      <span
        className="bg-[#2A254B] text-white py-[10px] px-[13px] cursor-pointer hover:bg-[#4E4D93]"
        onClick={(e) => {
          dispatch(decrementProductCount(product.id));
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        -
      </span>
      <span className="py-[10px] px-[13px]">{productCartCount}</span>
      <span
        className="bg-[#2A254B] text-white p-[10px] cursor-pointer hover:bg-[#4E4D93]"
        onClick={(e) => {
          dispatch(canIncrement && incrementProductCount(product.id));
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        +
      </span>
    </div>
  );
};

export default Quantity;
