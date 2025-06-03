import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { addTournament } from "../actions/tournaments";
import { createTournament } from "../constants/api";

const Create = () => {
  const dispatch = useDispatch();

  const handleCreate = async () => {
    const name = window.prompt("Tournament Name:");

    if (name === null) return;
    const trimmed = name.trim();
    const isValid = /^[A-Za-z0-9 ]+$/.test(trimmed) && trimmed.length > 0;

    if (!isValid) {
      return;
    }

    try {
      const newTournament = await createTournament({ name: trimmed });
      dispatch(addTournament(newTournament));
    } catch (error) {
      alert("Failed to create tournament. Please try again.");
    }

  };

  return <Button onClick={handleCreate}>CREATE TOURNAMENT</Button>;
};

export default Create;