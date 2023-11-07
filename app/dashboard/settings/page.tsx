import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={3} />
      <div className="container mx-auto">
        <h1>Settings</h1>
      </div>
    </main>
  )
}
