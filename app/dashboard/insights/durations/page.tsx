import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsDurationsPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component
        activeMenuIndex={2}
        activeInsightId="durations"
      />
      <div className="container mx-auto">
        <h1>Durations</h1>
      </div>
    </main>
  )
}
