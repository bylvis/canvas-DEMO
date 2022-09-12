import { createSlice } from "@reduxjs/toolkit";

interface resetState{
    value:number
}
const initialState:resetState = {
    value:0
}

const resetSlice = createSlice({
    name:'reset',
    initialState,
    reducers: {
        resetHandler(state){
            state.value = +new Date()
        }
    }
})
export const resetAction = resetSlice.actions;
export default resetSlice.reducer