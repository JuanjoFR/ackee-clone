import Link from "next/link"
import { Properties } from "./types"
import { getDomains } from "@/library/domain"
import React from "react"
import { DomainsMenu, InsightsMenu } from ".."

export default async function Component({
  activeMenuIndex,
  activeDomainId,
  activeInsightId
}: Properties) {
  const domains = await getDomains()
  const activeDomain = domains.find((domain) => domain.id === activeDomainId)

  return (
    <ul className="flex justify-center">
      <li className="mx-4">
        <Link href="/dashboard">
          <div
            className={`border-b-2 py-4 transition-colors duration-300 ${
              activeMenuIndex === 0
                ? "border-[#73FAC8] text-white"
                : "border-transparent hover:border-[#949696]"
            }`}
          >
            <span>Overview</span>
          </div>
        </Link>
      </li>

      <li className="mx-4">
        <DomainsMenu
          isMenuActive={activeMenuIndex === 1}
          activeDomain={activeDomain}
          allDomains={domains}
        />
      </li>

      <li>
        <InsightsMenu
          isMenuActive={activeMenuIndex === 2}
          activeInsightId={activeInsightId}
        />
      </li>

      <li className="mx-4">
        <Link href="/dashboard/settings">
          <div
            className={`border-b-2 py-4 transition-colors duration-300 ${
              activeMenuIndex === 3
                ? "border-[#73FAC8] text-white"
                : "border-transparent hover:border-[#949696]"
            }`}
          >
            <span>Settings</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
