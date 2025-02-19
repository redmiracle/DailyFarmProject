import {configureStore} from "@reduxjs/toolkit";
import render from "../features/render/globalRenderSlice.ts";
import cards from "../features/cardsSlice/CardsSlice.tsx";

export const store = configureStore({
    reducer: {
        render,cards
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch