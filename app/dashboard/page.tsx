import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"
import { BarChart, StatisticsSummary } from "@/library/pattern/organisms"
import React from "react"

export default async function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <div className="container mx-auto mb-2 pt-4">
        <HeaderLogo />
      </div>

      <div className="mb-14 border-b border-[#1C1F1F] text-lg font-light tracking-wide text-[#949696]">
        <div className="container mx-auto">
          <DashboardTabs.Component activeMenuIndex={0} />
        </div>
      </div>

      <React.Suspense
        fallback={
          <div className="container mx-auto">
            <div className="mx-4 mb-14">
              <StatisticsSummary.Loading />
            </div>
          </div>
        }
      >
        <div className="container mx-auto">
          <div className="mx-4 mb-14">
            <StatisticsSummary.Component />
          </div>
        </div>
      </React.Suspense>

      <div className="container mx-auto">
        <div className="mx-4 mb-14">
          <BarChart.Component />
        </div>
      </div>

      <div className="h-96" />
    </main>
  )
}
