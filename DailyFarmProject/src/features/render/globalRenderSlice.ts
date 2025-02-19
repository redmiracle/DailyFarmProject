import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface renderSliceType{
    page: string;
}

const initialState: renderSliceType= {
    page: 'accounting',
}

export const renderSlice = createSlice({
    name:'render',
    initialState,
    reducers:{
        setPage: (state, action: PayloadAction<string>) =>{
            state.page = action.payload
        }
    }
})

export const {setPage} = renderSlice.actions;
export default renderSlice.reducer;
