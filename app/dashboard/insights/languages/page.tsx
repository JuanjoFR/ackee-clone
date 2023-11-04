import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsLanguagesPage() {
  return (
    <main className="h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component
        activeMenuIndex={2}
        activeInsightId="languages"
      />
      <div className="container mx-auto">
        <h1>Languages</h1>
      </div>
    </main>
  )
}
