import { configureStore, createSelector } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import { reducer1 } from "./reducer1";
import { reducer2 } from "./reducer2";

const rootReducer=combineReducers({reducer,reducer1,reducer2})
export const store=createStore(rootReducer)