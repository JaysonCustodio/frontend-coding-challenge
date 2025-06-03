import { RootState } from "../store";

export const selectTournaments = (state: RootState) =>
  state.tournament.tournaments;

export const selectTournamentById = (state: RootState, id: string) =>
  state.tournament.tournaments.find((t) => t.id === id);
