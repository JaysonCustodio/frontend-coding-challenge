import React, { useCallback } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";

import Input from "../components/Input";
import { getTournaments } from "../constants/api";

const Filter = () => {
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      try {
        dispatch({ type: "FETCH_TOURNAMENTS_START" });
        const response = await getTournaments(searchTerm);
        dispatch({ type: "SET_TOURNAMENTS", payload: response });
      } catch (err: any) {
        dispatch({ type: "FETCH_TOURNAMENTS_ERROR", payload: err.message });
      }
    }, 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    debouncedSearch(searchTerm);
  };

  return (
    <Input
      placeholder="Search tournament ..."
      onChange={handleSearch}
    />
  );
};

export default Filter;
