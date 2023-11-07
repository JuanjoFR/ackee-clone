import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsReferrersPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component
        activeMenuIndex={2}
        activeInsightId="referrers"
      />
      <div className="container mx-auto">
        <h1>Referrers</h1>
      </div>
    </main>
  )
}
