import { Dispatch, Fragment, SetStateAction } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Player } from './hooks/useListPlayers'

interface Props {
    players: Player[]
    setSelectedPlayer: Dispatch<SetStateAction<Player | null>>
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PlayerSelect({ players, setSelectedPlayer }: Props) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Select Player
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {players.map(player => (
                            <Menu.Item key={player.id}>
                                <a 
                                    className={classNames('text-black block px-4 py-2 text-sm')}
                                    onClick={() => setSelectedPlayer(player)}
                                >
                                    {player.name}
                                </a>
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}