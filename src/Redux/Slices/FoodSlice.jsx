import { asyncThunkCreator, buildCreateSlice, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/Api";
import axios from "axios";
import { useState } from "react";



export const fetchfoods = createAsyncThunk(
    "foods/fectchfoods",
   
    async()=>{
        const res = await axios.get("https://dummyjson.com/recipes")
        
        
        return res.data;


    }
)
const foodSlice = createSlice({
    name : "foods", 
    initialState : {
        foods:[],
       loading : false,
       error : null 
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchfoods.pending, (state)=>{
            state.loading = true ;
            state.error = null;

        })
        .addCase(fetchfoods.fulfilled, (state,action)=>{
          state.loading = false;
          state.foods = action.payload.recipes;
        })
        .addCase(fetchfoods.rejected, (state)=>{
            state.loading = false;
            state.error = "Unable to fetch foods"
        })
    }

})

export default foodSlice.reducer;