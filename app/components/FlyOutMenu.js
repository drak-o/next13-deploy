'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  HomeIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'
import {home, about, contact} from './navrouter';

const solutions = [
  { name: 'HOME', onClick: home, icon: HomeIcon },
  { name: 'ABOUT', onClick: about, icon: CursorArrowRaysIcon },
  { name: 'CONTACT', onClick: contact, icon: FingerPrintIcon },
]

export default function FlyOutMenu() {
  return (
    <Popover className="relative" >
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 navbar-text outline-none">
        <span>Navigation</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-min max-w-md mt-1 mr-10 flex-auto rounded-3xl backdrop-filter bg-white bg-opacity-[3%] backdrop-blur-ld text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 z-10">
            <div className="p-4">
              {solutions.map((item) => (
                <div onClick={item.onClick} key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-opacity-[10%] hover:bg-white">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white bg-opacity-80 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className='flex justify-center items-center'>
                    <a href={item.href} className="font-semibold text-gray-900 ">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
