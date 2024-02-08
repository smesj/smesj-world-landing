'use client'
import { basicfetch } from "@/app/api/fetchFunctions";
import { useCallback, useState } from "react";

export interface Player {
    id: string
    name: string | null
}

export const useGetPlayers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState<Array<Player>>([]);

    const fetchPlayers = useCallback(() => {
        setIsLoading(true);
        basicfetch<Player[]>('/api/users')
            .then((players: Player[]) => {
                setPlayers(players);
            })
            .finally(() => setIsLoading(false));
    },[]);

    return {
        fetchPlayers,
        isLoading,
        players: players
    }
}
