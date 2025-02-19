import {cadsType} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {recCards, saleCards,favoriteCards} from "../const.ts";


export interface CardsSliceType {
    recCards:cadsType[],
    saleCards:cadsType[],
    favoriteCards:cadsType[],
}

const initialState = {
    recCards: recCards,
    saleCards:saleCards,
    favoriteCards:favoriteCards,
}

export const cardsSlice = createSlice({
     name:"cardsSlice",
     initialState,
     reducers:{
         addRecCards:(state,action)=>{
              state.recCards = action.payload;
         },
         addSaleCards:(state,action)=>{
             state.saleCards = action.payload;
         },
         addFavoriteCards:(state,action)=>{
             state.favoriteCards = action.payload;
         }
     }

})

export const {addRecCards,addSaleCards,addFavoriteCards}=cardsSlice.actions;
export default cardsSlice.reducer;

