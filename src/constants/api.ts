import axios from "axios";
import { Tournament } from "../types/tournament";

export const API_BASE_URL = 'http://localhost:4000/tournaments';

export const getTournaments = async (searchTerm?: string): Promise<Tournament[]> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const url = searchTerm
            ? `${API_BASE_URL}?q=${encodeURIComponent(searchTerm)}`
            : API_BASE_URL;

        const response = await axios.get<Tournament[]>(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createTournament = async (data: { name: string }): Promise<Tournament> => {
    try {
        const response = await axios.post<Tournament>(API_BASE_URL, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};