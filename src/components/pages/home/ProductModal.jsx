import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { addToCart } from "../../../features/cartSlice";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";

const ProductModal = ({ onClose, product }) => {
  const dispatch = useDispatch();
  return (
    <>
      {product && (
        <div className="fixed inset-0 flex justify-center items-center z-[4]">
          <div className=" w-[1080px] h-[600px] p-[15px] bg-white z-[1] mx-auto flex justify-between">
            <div className="flex mt-[30px] gap-[20px]">
              <img
                src={product.img}
                alt={product.title}
                className="w-[300px] h-[320px]"
              />
              <div className="flex flex-col gap-[40px] max-w-[600px]">
                <div className="flex flex-col gap-[20px]">
                  <span className="text-[20px] font-bold uppercase">
                    {product.title}
                  </span>
                  <span className="font-[500] break-all">
                    {product.price} £
                  </span>
                  <hr className="text-[#EBE8F4]" />
                  <span>{product.desc}</span>
                </div>
                <div className="">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>

            <AiFillCloseSquare
              className="text-[20px] text-[#2A254B] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div
            className="absolute inset-0 bg-gray-900/50"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
