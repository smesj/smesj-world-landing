'use client'
import NewGameSheet from "./NewGameSheet";
import {  useGetPlayers } from "./hooks/useListPlayers";
import { useEffect } from "react";

export default function EclipsePage() {
    const { isLoading, players, fetchPlayers } = useGetPlayers();

    useEffect(() => {
        fetchPlayers()
    },[]);

    return (<NewGameSheet players={players} />)
}