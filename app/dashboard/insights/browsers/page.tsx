import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsBrowsersPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="browsers" />
      <div className="container mx-auto">
        <h1>Browsers</h1>
      </div>
    </main>
  )
}
