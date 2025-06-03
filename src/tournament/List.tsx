import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import Button from "../components/Button";
import TournamentItem from "./Item";    
import { getTournaments } from "../constants/api";
import { Tournament } from "../types/tournament";
import { deleteTournament, editTournament } from "../actions/tournaments";

const TournamentList = () => {
    const dispatch = useDispatch();
    const { tournaments, loading, error } = useSelector(
        (state: RootState) => state.tournament
    );

    const handleFetchTournaments = async () => {
        try {
            dispatch({ type: "FETCH_TOURNAMENTS_START" });
            const response = await getTournaments();
            dispatch({ type: "SET_TOURNAMENTS", payload: response });
        } catch (err: any) {
            dispatch({ type: "FETCH_TOURNAMENTS_ERROR", payload: err.message });
        }
    }

    const handleEdit = (tournament: Tournament) => {
        const newName = window.prompt("New Tournament Name:", tournament.name);
        if (newName === null) return;

        const trimmed = newName.trim();
        const isValid = /^[A-Za-z0-9 ]+$/.test(trimmed) && trimmed.length > 0;

        if (!isValid) {
            return;
        }
        const updatedTournament: Tournament = { ...tournament, name: trimmed };
        dispatch(editTournament(updatedTournament));
    };

    const handleDelete = (tournament: Tournament) => {
        const confirmed = window.confirm("Do you really want to delete this tournament?");
        if (!confirmed) return;
        dispatch(deleteTournament(tournament.id));
    };

    useEffect(() => {
        handleFetchTournaments();
    }, []);

    if (error) {
        return (
            <div className="loader">
                <p>Something went wrong</p>
                <Button onClick={handleFetchTournaments}>RETRY</Button>
            </div>
        );
    }

    if (loading || !tournaments.length) {
        return (
            <div className="loader">
                {loading ? "Loading tournaments ..." : "No tournaments found."}
            </div>
        );
    }

    return (
        <div className="tournament-list">
            {tournaments.map((tournament) => (
                <TournamentItem
                    key={tournament.id}
                    tournament={tournament}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default TournamentList;
