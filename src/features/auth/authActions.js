import authService from './authService'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = error.response.data.error
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const login = createAsyncThunk('auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (error) {
            const message = error.response.data.error
            return thunkAPI.rejectWithValue(message)
        }
    }
)
