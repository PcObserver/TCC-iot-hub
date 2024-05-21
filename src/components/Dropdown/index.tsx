import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react'
import { Wifi } from 'lucide-react'

import { ReactNode } from 'react'

export default function Dropdown({ children }: { children: ReactNode }) {
    return (
        <div className="w-52 text-right">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Options

                    <Wifi className="size-4 fill-white/60" />
                </MenuButton>
                <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                        {children}
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}



// Dropdown({ children }: { children: ReactNode })