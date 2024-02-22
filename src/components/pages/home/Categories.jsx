import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveCategory,
  selectCategories,
  setActiveCategory,
} from "../../../features/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);

  return (
    <div className="mt-[50px] flex justify-center gap-[44px] mobile:gap-[8px] flex-wrap">
      {categories.map((category) => (
        <button
          key={category.key}
          className={
            "px-[32px] py-[12px] text-white hover:bg-[#4E4D93] " +
            (activeCategory === category.key ? "bg-[#4E4D93]" : "bg-[#2A254B]")
          }
          onClick={() => dispatch(setActiveCategory(category.key))}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
