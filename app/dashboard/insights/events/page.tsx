import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsEventsPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="events" />
      <div className="container mx-auto">
        <h1>Events</h1>
      </div>
    </main>
  )
}
