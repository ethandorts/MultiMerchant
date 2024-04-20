
import { BaseSlice } from "../Redux/BaseSlice.js";

export const OrdersSlice = BaseSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAllOrders: builder.query({
            query: () => ({
                url: `http://localhost:5000/api/orders/getAllOrders`,
                method: 'GET',
            }),
        }),
        GetOrderByID: builder.query({
            query: (id) => ({
                url: `http://localhost:5000/api/orders/getOrderByID/${id}`,
                method: 'GET'
            })
        }), 
    }),
});

export const { useUserLoginMutation, useUserLogoutMutation, useCreateNewUserMutation, useGetUserByIDQuery } = OrdersSlice.injectEndpoints;