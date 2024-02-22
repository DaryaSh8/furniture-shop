import React, { useState } from "react";
import { useGetProductsQuery } from "../../../features/productApi";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveCategory } from "../../../features/categorySlice";
import { addToCart } from "../../../features/cartSlice";
import ProductModal from "./ProductModal";
import { createPortal } from "react-dom";

const Products = () => {
  const activeCategory = useSelector(selectActiveCategory);
  const { data: products = [], isLoading } =
    useGetProductsQuery(activeCategory);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center text-[40px] font-bold">
          Loading
        </div>
      ) : (
        <div
          id="products"
          className="grid gap-5 mobile:gap-3 grid-cols-4 mobile:grid-cols-2 tablet:grid-cols-3 desktop:px-[10px]  mt-[50px] relative mb-[100px]"
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export const ProductCard = ({ product }) => {
  const [itemIsOpen, setItemIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="pt-[20px] hover:cursor-pointer"
        onClick={() => {
          setItemIsOpen((prevState) => !prevState);
        }}
      >
        <img src={product.img} alt={product.title} className="w-full" />
        <span className="text-[20px] mt-[30px]">{product.title}</span>
        <div className="flex justify-between pt-[15px]">
          <span className="font-bold">{product.price} £</span>
          <button
            className="px-[7px] py-[4px] text-white bg-[#2A254B] hover:bg-[#4E4D93]"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product));
            }}
          >
            +
          </button>
        </div>
      </div>

      {itemIsOpen
        ? createPortal(
            <ProductModal
              product={product}
              onClose={() => setItemIsOpen((prevState) => !prevState)}
            />,
            document.body,
          )
        : undefined}
    </>
  );
};

export default Products;
