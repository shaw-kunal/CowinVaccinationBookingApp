import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({

    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error:false,
    },
    reducers: {
        loginStart:(state)=>{
           state.isFetching = true;
        },
        
        loginSucess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error= false;
        },
        loginFailure :(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logout:(state)=>{
            state.currentUser = null;
            console.log("logout")
        }

    }

})

export const {loginStart,loginSucess,loginFailure,logout} = userSlice.actions;
export default userSlice.reducer;