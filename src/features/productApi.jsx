import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/products/" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: (category = "all") =>
        category === "all" ? "" : `?category=${category}`,
    }),
    getProductById: build.query({
      query: (id) => `${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
