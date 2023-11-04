"use client"

import React from "react"
import { MainComponentProperties } from "./types"
import Hotkeys from "./hotkeys"
import { Menu, Transition } from "@headlessui/react"
import { HiMiniChevronDown } from "react-icons/hi2"
import Link from "next/link"

export default function Component({
  isMenuActive,
  activeInsightId
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

  function getLabel() {
    switch (activeInsightId) {
      case "views": {
        return "Views"
      }
      case "pages": {
        return "Pages"
      }
      case "referrers": {
        return "Referrers"
      }
      case "durations": {
        return "Durations"
      }
      case "events": {
        return "Events"
      }
      case "systems": {
        return "Systems"
      }
      case "devices": {
        return "Devices"
      }
      case "browsers": {
        return "Browsers"
      }
      case "sizes": {
        return "Sizes"
      }
      case "languages": {
        return "Languages"
      }
      default: {
        throw new Error(`Unknown active insight ID "${activeInsightId}"`)
      }
    }
  }

  return (
    <React.Fragment>
      <Hotkeys />
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
                  {isMenuActive ? getLabel() : "Insights"}
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
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/views`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "views"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Views
                      </span>
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                        <span className="absolute">v</span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/pages`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "pages"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Pages
                      </span>
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                        <span className="absolute">p</span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/referrers`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "referrers"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Referrers
                      </span>
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                        <span className="absolute">r</span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/durations`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "durations"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Durations
                      </span>
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                        <span className="absolute">d</span>
                      </div>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2">
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/events`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "events"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Events
                      </span>
                      <div className="relative flex h-5 w-5 items-center justify-center rounded-sm border border-[#6E7373] bg-[#4C5050]">
                        <span className="absolute">e</span>
                      </div>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2">
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/systems`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "systems"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Systems
                      </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/devices`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "devices"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Devices
                      </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/browsers`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "browsers"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Browsers
                      </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/sizes`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "sizes"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Sizes
                      </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="group flex w-full items-center justify-between px-4 py-2 text-sm text-[#9D9F9F] hover:bg-[#4C5050]"
                      href={`/dashboard/insights/languages`}
                    >
                      <span
                        className={
                          isMenuActive && activeInsightId === "languages"
                            ? "text-white"
                            : "text-[#9D9F9F]"
                        }
                      >
                        Languages
                      </span>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </React.Fragment>
        )}
      </Menu>
    </React.Fragment>
  )
}
