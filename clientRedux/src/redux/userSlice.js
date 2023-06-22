import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo:{
    name: "Josia",
    email: "josianjidile@gmail.com",
    },
     pending: null,
     error:false,
    },
   reducers:{
    updateStart:(state)=>{
      state.pending = true;
    },
    updateSuccess:(state,action)=>{
      state.pending = false;
      state.userInfo =action.payload;
    },
    updateError:(state)=>{
      state.error=true;
      state.pending = false;
    },

   },

});

export const{updateStart,updateSuccess,updateError} =userSlice.actions;
export default userSlice.reducer; 














