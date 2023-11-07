import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function InsightsDevicesPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={2} activeInsightId="devices" />
      <div className="container mx-auto">
        <h1>Devices</h1>
      </div>
    </main>
  )
}
