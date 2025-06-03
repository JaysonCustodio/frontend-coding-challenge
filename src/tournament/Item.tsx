import React from "react";
import { Tournament } from "../types/tournament";
import H6 from "../components/H6";
import Button from "../components/Button";

interface TournamentItemProps {
  tournament: Tournament;
  onEdit: (tournament: Tournament) => void;
  onDelete: (tournament: Tournament) => void;
}

const TournamentItem: React.FC<TournamentItemProps> = ({ tournament, onEdit, onDelete }) => {
    
  return (
    <div key={tournament.id} className="tournament-item">
      <H6>{tournament.name}</H6>
      <div className="tournament-details">
        <span>Organizer: {tournament.organizer}</span>
        <span>Game: {tournament.game}</span>
        <span>
          Participants: {tournament.participants.current} / {tournament.participants.max}
        </span>
        <span>Start: {new Date(tournament.startDate).toLocaleString("en-GB")}</span>
      </div>
      <div className="tournament-actions">
        <Button onClick={() => onEdit(tournament)}>EDIT</Button>
        <Button onClick={() => onDelete(tournament)}>DELETE</Button>
      </div>
    </div>
  );
};

export default TournamentItem;
