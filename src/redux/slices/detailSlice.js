import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "../actions";

const initialState={
    detailId:null,
    isLoading:false,
    error:null,
    info:null,
    route:[]
}

const detailSlice=createSlice({
    name:"detail",
    initialState,
    reducers:{
        open:(state,action)=>{
            state.detailId=action.payload
        },
        close:(state)=>{
            state.detailId=null
        },
        clearRoute:(state)=>{
            state.route=[]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getDetail.pending,(state)=>{
            state.isLoading=true
        });
        builder.addCase(getDetail.rejected,(state,action)=>{
            state.isLoading=false,
            state.error=action.error.message
        });
        builder.addCase(getDetail.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.error=null,
            state.info=action.payload,
            state.route=action.payload.trail
        });
    }
})
export const {open,close,clearRoute} =detailSlice.actions
export default detailSlice.reducer