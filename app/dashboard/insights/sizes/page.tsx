import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsSizesPage() {
  return (
    <main className="h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="sizes" />
      <div className="container mx-auto">
        <h1>Sizes</h1>
      </div>
    </main>
  )
}
