import { configureStore } from "@reduxjs/toolkit";
import authreducer from './Slices/AuthSlice'
import favouritereducer from './Slices/FavoriteSlice'
import foodreducer from './Slices/FoodSlice'
import themereducer from './Slices/DarkSlice'

export const store = configureStore({
    reducer : {
        auth :  authreducer,
        fav : favouritereducer,
        food : foodreducer,
        dark : themereducer,
    }
})