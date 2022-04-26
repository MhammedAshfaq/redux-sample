import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchAsyncUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})

const initialState = {
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [fetchUsers.pending]: () => {
            console.log("Requst Pending")
        },
        [fetchUsers.fulfilled]: (state, { payload }) => {
            console.log("Requst Success")
            return { ...state, user: payload }
        },
        [fetchUsers.rejected]: () => {
            console.log('Requst Failed')
        }
    }
});

export const selectUser = (state) =>state.user.user;
export default userSlice.reducer