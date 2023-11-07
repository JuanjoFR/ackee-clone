import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsPagesPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="pages" />
      <div className="container mx-auto">
        <h1>Pages</h1>
      </div>
    </main>
  )
}
