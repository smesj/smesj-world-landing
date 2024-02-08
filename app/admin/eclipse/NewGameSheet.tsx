'use client'

import PlayerCol from "./PlayerCol"
import { Player } from "./hooks/useListPlayers"

interface Props {
    players: Player[]
}


export default function NewGameSheet({players}: Props) {
    return (
        <>
            <div className="border-b border-gray-200 bg-gray-800 px-4 py-5 sm:px-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h1 className="text-base font-semibold leading-6 text-white text-2xl">Eclipse</h1>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <button
                            type="button"
                            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            New Game
                        </button>
                    </div>
                </div>
                <div className="flex flex-row space-between gap-4">
                    {players?.map(player => {
                        return <PlayerCol key={player.id} player={player} />
                    })}
                </div>
            </div>
        </>
    )
}