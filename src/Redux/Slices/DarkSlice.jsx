import { createSlice } from "@reduxjs/toolkit";

const initialTheme = JSON.parse(localStorage.getItem("theme")) || "light" 
const darkSlice = createSlice({
    name : "dark",
    initialState : {
        theme: initialTheme,
    },
    reducers : {
        changetheme : (state)=>{
            state.theme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("theme",JSON.stringify(state.theme));

        }
        
    }

})
export const {changetheme} = darkSlice.actions;
export default darkSlice.reducer;