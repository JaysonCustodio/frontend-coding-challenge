import { Tournament } from "../types/tournament";

export const FETCH_TOURNAMENTS_START = "FETCH_TOURNAMENTS_START";
export const SET_TOURNAMENTS = "SET_TOURNAMENTS";
export const FETCH_TOURNAMENTS_ERROR = "FETCH_TOURNAMENTS_ERROR";
export const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";
export const EDIT_TOURNAMENT = "EDIT_TOURNAMENT";
export const DELETE_TOURNAMENT = "DELETE_TOURNAMENT";

export const addTournament = (tournament: Tournament) => ({
  type: CREATE_TOURNAMENT,
  payload: tournament,
});

export const editTournament = (tournament: Tournament) => ({
  type: EDIT_TOURNAMENT,
  payload: tournament,
});

export const deleteTournament = (id: string) => ({
  type: DELETE_TOURNAMENT,
  payload: id,
});



