import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import itemService from './itemService'

const initialState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get Items
export const list = createAsyncThunk(
    'items/list',
    async (thunkAPI) => {
        try {
            return await itemService.list()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Add Item
export const add = createAsyncThunk(
    'items/add',
    async (item, thunkAPI) => {
        try {
            return await itemService.save(item)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccesss = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(list.pending, (state) => {
                state.isLoading = true
            })
            .addCase(list.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = action.payload
            })
            .addCase(list.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(add.pending, (state) => {
                state.isLoading = true
            })
            .addCase(add.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = action.payload
            })
            .addCase(add.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})
export const { reset } = itemSlice.actions
export default itemSlice.reducer