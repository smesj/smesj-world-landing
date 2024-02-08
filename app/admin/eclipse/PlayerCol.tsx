import { Dispatch, SetStateAction } from "react"
import { Player } from "./hooks/useListPlayers"

interface Props {
    player: Player
    handleAddPlayer: (formObject: any) => void
    setSelectedPlayer: Dispatch<SetStateAction<Player | null>>
}

export default function PlayerCol({ player, handleAddPlayer, setSelectedPlayer}: Props) {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        const playerStats = {
            id: player.id,
            name: player.name,
            stats: formObject
        }
        handleAddPlayer(playerStats)
    }

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-1xl font-bold leading-tight tracking-tight text-black">{player.name}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="reputation" className="block text-sm font-medium leading-6 text-gray-900">
                        Reputation
                    </label>
                    <input
                        name="reputation"
                        type="number"
                        id="reputation"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Reputation"
                    />
                </div>
                <div>
                    <label htmlFor="Ambassador" className="block text-sm font-medium leading-6 text-gray-900">
                        Ambassador
                    </label>
                    <input
                        name="Ambassador"
                        type="number"
                        id="Ambassador"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Ambassador"
                    />
                </div>
                <div>
                    <label htmlFor="Sectors" className="block text-sm font-medium leading-6 text-gray-900">
                        Sectors
                    </label>
                    <input
                        name="Sectors"
                        type="number"
                        id="Sectors"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Sectors"
                    />
                </div>
                <div>
                    <label htmlFor="Warp" className="block text-sm font-medium leading-6 text-gray-900">
                        Warp
                    </label>
                    <input
                        name="Warp"
                        type="number"
                        id="Warp"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Warp"
                    />
                </div>
                <div>
                    <label htmlFor="Monolith" className="block text-sm font-medium leading-6 text-gray-900">
                        Monolith
                    </label>
                    <input
                        name="Monolith"
                        type="number"
                        id="Monolith"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Monolith"
                    />
                </div>
                <div>
                    <label htmlFor="Discovery" className="block text-sm font-medium leading-6 text-gray-900">
                        Discovery
                    </label>
                    <input
                        name="Discovery"
                        type="number"
                        id="Discovery"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Discovery"
                    />
                </div>
                <div>
                    <label htmlFor="Traitor" className="block text-sm font-medium leading-6 text-gray-900">
                        Traitor
                    </label>
                    <input
                        name="Traitor"
                        type="number"
                        id="Traitor"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Traitor"
                    />
                </div>
                <div>
                    <label htmlFor="Tech" className="block text-sm font-medium leading-6 text-gray-900">
                        Tech
                    </label>
                    <input
                        name="Tech"
                        type="number"
                        id="Tech"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Tech"
                    />
                </div>
                <div>
                    <label htmlFor="Species" className="block text-sm font-medium leading-6 text-gray-900">
                        Species
                    </label>
                    <input
                        name="Species"
                        type="number"
                        id="Species"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Species"
                    />
                </div>
                <div className="flex justify-end py-4 gap-8">
                    <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 w-1/3"
                        onClick={() => setSelectedPlayer(null)}
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/3"
                    >
                        Save
                    </button>
                </div>

            </form>
        </div>
    )
}