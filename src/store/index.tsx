import { createStore, combineReducers } from "redux";
import reducer from "../reducers";

export interface IUserState {
  name: string;
  age: number;
}
export interface IAppState {
  app: IUserState;
}

export const store =  createStore(combineReducers({
  app: reducer,
}));

