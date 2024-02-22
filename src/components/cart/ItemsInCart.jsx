import React from "react";
import Quantity from "./Quantity";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cartSlice";

const ItemsInCart = ({ onClose }) => {
  const itemsInCart = useSelector(selectCartItems);

  return (
    <table className="w-full border-spacing-y-[20px] ">
      <thead>
        <tr className="text-[18px]">
          <th className="text-left py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
            Product
          </th>
          <th className="text-center py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
            Quantity
          </th>
          <th className="text-right py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {itemsInCart.map((product) => (
          <tr key={product.id}>
            <td className="text-left flex py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[150px]"
              />
              <span className="ml-[30px] text-[18px]">{product.title}</span>
            </td>
            <td className="text-center py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
              <Quantity product={product} />
            </td>
            <td className="font-bold text-right py-[10px] pr-[40px] mobile:pr-[15px] tablet:pr-[25px]">
              {product.price * product.count} £
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemsInCart;
