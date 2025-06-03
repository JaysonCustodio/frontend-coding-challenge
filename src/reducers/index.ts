import { legacy_createStore as createStore, combineReducers } from "redux";
import { tournamentReducer } from "../reducers/tournaments";

const rootReducer = combineReducers({
  tournament: tournamentReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
