import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsSystemsPage() {
  return (
    <main className="h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="systems" />
      <div className="container mx-auto">
        <h1>Systems</h1>
      </div>
    </main>
  )
}
