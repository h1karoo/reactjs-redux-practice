import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

//  export const fetchUsers = () => async (dispatch: AppDispatch) => {
//      try {
//          dispatch(userSlice.actions.usersFetching())
//          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//          dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//      } catch (error) {
//         let errorMessage = "Failed to do something exceptional";
//         if (error instanceof Error) {
//           errorMessage = error.message;
//         }
//          dispatch(userSlice.actions.usersFetchingError(errorMessage))
//      }
//  }

 export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/user2s')
            return response.data
        } catch(e) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
 )