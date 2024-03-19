import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const CreateNewUser = createAsyncThunk(
    'CreateNewUser',
    async (RegisterData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/createUser', RegisterData);
            console.log('Successfully added to database');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const LoginUser = createAsyncThunk(
    'LoginUser',
    async (LoginData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', LoginData);
            console.log('User successful login');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        UserInformation: {
            UserID: null,
            FirstName: '',
            Surname: ''
        },
        isLoading: false,
        ErrorOccured: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
            state.ErrorOccured = null;
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.UserInformation.UserID = action.payload.user._id;
            state.UserInformation.FirstName = action.payload.user.FirstName;
            state.UserInformation.Surname = action.payload.user.Surname;
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.ErrorOccured = action.payload; 
        });
    },
});

export default authenticationSlice.reducer;