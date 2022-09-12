import { createSlice } from "@reduxjs/toolkit";

interface ColorSelectState{
    value:string
}
const initialState:ColorSelectState = {
    value:'black'
}

const colorSlice = createSlice({
    name:'color',
    initialState,
    reducers:{
        changeRedColor(state){
            state.value = 'red'
        },
        changeBlueColor(state){
            state.value = 'blue'
        },
        changeYellowColor(state){
            state.value = 'yellow'
        }
    }
})
export const colorAction = colorSlice.actions;
export default colorSlice.reducer