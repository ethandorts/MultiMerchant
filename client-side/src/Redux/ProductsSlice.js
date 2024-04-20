// ProductsSlice.js
import { BaseSlice } from "../Redux/BaseSlice.js";

export const ProductsSlice = BaseSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAllProducts: builder.query({
            query: () => ({
                url: `http://localhost:5000/api/products/getAllProducts`,
                method: 'GET'
            }),
        }),
        GetProductsByUserID: builder.query({
            query: (id) => ({
                url: `http://localhost:5000/api/products/getProductsByUserID/${id}`,
                method: 'GET'
            })
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductsByUserIDQuery } = ProductsSlice;
