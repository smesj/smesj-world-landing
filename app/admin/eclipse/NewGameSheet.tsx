'use client'

import { useState } from "react"
import { Player } from "./hooks/useListPlayers"
import NewPlayerPanel from "./NewPlayerPanel"

interface Props {
    players: Player[]
}

export default function NewGameSheet({ players }: Props) {
    const [open, setOpen] = useState(false)
    const [gamePlayers, setGamePlayers] = useState<any[]>([])

    return (
        <>
            <div className="border-b border-gray-200 bg-gray-800 px-4 py-5 sm:px-6 sm:rounded-xl">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h1 className="text-base font-semibold leading-6 text-white text-2xl">Eclipse</h1>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <button
                            type="button"
                            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => setOpen(!open)}
                        >
                            New Game
                        </button>
                    </div>
                </div>
                <div>
                    <pre>{gamePlayers.map(gamePlayer => <div>{JSON.stringify(gamePlayer, null, 4)}</div>)}</pre>
                </div>
            </div>
            <NewPlayerPanel open={open} setOpen={setOpen} players={players} setGamePlayers={setGamePlayers} gamePlayers={gamePlayers} />
        </>
    )
}