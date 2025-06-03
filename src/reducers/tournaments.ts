import { Tournament } from "../types/tournament";
import {
  CREATE_TOURNAMENT,
  EDIT_TOURNAMENT,
  DELETE_TOURNAMENT,
  SET_TOURNAMENTS,
  FETCH_TOURNAMENTS_START,
  FETCH_TOURNAMENTS_ERROR,
} from "../actions/tournaments";

interface TournamentState {
  tournaments: Tournament[];
  loading: boolean;
  error: string | null;
}

const initialState: TournamentState = {
  tournaments: [],
  loading: false,
  error: null,
};

export const tournamentReducer = (
  state = initialState,
  action: { type: string; payload?: any }
): TournamentState => {
  switch (action.type) {
    case FETCH_TOURNAMENTS_START:
      return { ...state, loading: true, error: null };
    case SET_TOURNAMENTS:
      return { ...state, tournaments: action.payload, loading: false };
    case FETCH_TOURNAMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CREATE_TOURNAMENT:
      return {
        ...state,
        tournaments: [action.payload, ...state.tournaments],
      };
    case EDIT_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case DELETE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};
