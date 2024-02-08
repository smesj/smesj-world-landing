import { Player } from "./hooks/useListPlayers"

interface Props {
    player: Player
}

export default function PlayerCol({player}: Props) {
    return (
        <div className="flex flex-col w-1/6 gap-4">
            <h3 className="text-1xl font-bold leading-tight tracking-tight text-white">{player.name}</h3>
            <div>
                <label htmlFor="reputation" className="sr-only">
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
                <label htmlFor="Ambassador" className="sr-only">
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
                <label htmlFor="Sectors" className="sr-only">
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
                <label htmlFor="Warp" className="sr-only">
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
                <label htmlFor="Monolith" className="sr-only">
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
                <label htmlFor="Discovery" className="sr-only">
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
                <label htmlFor="Traitor" className="sr-only">
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
                <label htmlFor="Tech" className="sr-only">
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
                <label htmlFor="Species" className="sr-only">
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
        </div>
    )
}