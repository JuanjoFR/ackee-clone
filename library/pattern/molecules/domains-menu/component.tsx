"use client"

import { MainComponentProperties } from "./types"
import { HiMiniChevronDown } from "react-icons/hi2"
import React from "react"
import Link from "next/link"
import Hotkeys from "./hotkeys"
import { Menu, Transition } from "@headlessui/react"

export default function Component({
  isMenuActive,
  activeDomain,
  allDomains
}: MainComponentProperties) {
  function getMenuInteractiveClasses(isOpen: boolean) {
    if (isMenuActive) {
      return "border-[#73FAC8] text-white"
    }

    if (isOpen) {
      return "border-[#949696]"
    }

    return "border-transparent hover:border-[#949696]"
  }

  return (
    <React.Fragment>
      <Hotkeys domains={allDomains} />
      <Menu as="div" className="relative">
        {({ open }) => (
          <React.Fragment>
            <div>
              <Menu.Button
                className={`inline-flex items-center border-b-2 py-4 transition-colors duration-300 ${getMenuInteractiveClasses(
                  open
                )}`}
              >
                <span className="mr-1">
                  {activeDomain ? activeDomain.name : "Domains"}
                </span>
                <HiMiniChevronDown className="h-5 w-5" />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-[#4C5252] rounded-md bg-[#424747] shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-2">
                  {allDomains.map((domain) => (
                    <Menu.Item key={domain.id}>
                      <Link
                        className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                        href={`/dashboard/domain/${domain.id}`}
                      >
                        <span
                          className={
                            activeDomain && activeDomain.id === domain.id
                              ? "text-white"
                              : "text-[#9D9F9F]"
                          }
                        >
                          {domain.name}
                        </span>
                        <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                          <span className="absolute mt-[1px]">
                            {domain.hotkey}
                          </span>
                        </div>
                      </Link>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </React.Fragment>
        )}
      </Menu>
    </React.Fragment>
  )
}
