
import { createSlice } from "@reduxjs/toolkit";

const  storeuser = JSON.parse(localStorage.getItem("users")) || [] 

const storecurrentuser = JSON.parse(localStorage.getItem("currentuser")) 

const authSlice = createSlice({
 name : "auth",
 initialState : {
    users : storeuser,
    currentuser : storecurrentuser,
    isAuthenticated : !!storecurrentuser,
    error : null

 },
  reducers : {
    signup : (state,action)=>{
        const { email,username,password} = action.payload
        const userExists = state.users.find(
            (user)=> user.email === email
        )
        if(userExists){
            state.error = "user already exits"
            return 
        }
        const newuser = {username,email,password}
        state.users.push(newuser)
        state.currentuser = newuser
        state.isAuthenticated = true 
        state.error = null
        localStorage.setItem("users",JSON.stringify(state.users))
         localStorage.setItem("currentuser",JSON.stringify(state.currentuser))

    },
    login : (state, action)=>{
        const { email, password } = action.payload;

        const foundUser = state.users.find(
            (user) => user.email === email && user.password === password
        );

        if(foundUser){
           state.currentuser = foundUser 
           state.isAuthenticated = true
           state.error = null 
           localStorage.setItem("currentuser",JSON.stringify(foundUser)) 

        }
        else{
            state.error = "invalid email or password"
        }
    },
    logout : (state) =>{
        state.currentuser = null
        state.isAuthenticated = false
        state.error = null
        localStorage.removeItem("currentuser")
    }

  }
})
export const {signup,login,logout} = authSlice.actions;
export default authSlice.reducer;