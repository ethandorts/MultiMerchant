
import { BaseSlice } from "../Redux/BaseSlice.js";

export const UsersSlice = BaseSlice.injectEndpoints({
    endpoints: (builder) => ({
        UserLogin: builder.mutation({
            query: (RequestData) => ({
                url: `http://localhost:5000/api/users/login`,
                method: 'POST',
                body: RequestData,
            }),
        }),
        UserLogout: builder.mutation({
            query: () => ({
                url: `http://localhost:5000/api/users/logout`,
                method: 'POST',
            })
        }),
        CreateNewUser: builder.mutation({
            query: (RequestData) => ({
                url: `http://localhost:5000/api/users/createUser`,
                method: 'POST',
                body: RequestData,
            })
        }),
        GetUserByID: builder.query({
            query: (id) => ({
                url: `http://localhost:3000/api/users/getUserById/${id}`,
                method: 'GET'
            })
        }) 
    }),
});

export const { useUserLoginMutation, useUserLogoutMutation, useCreateNewUserMutation, useGetUserByIDQuery } = UsersSlice;