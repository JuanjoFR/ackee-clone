import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default async function DashboardPage() {
  return (
    <main className="h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={0} />
      <div className="container mx-auto">
        <h1>Dashboard</h1>
      </div>
    </main>
  )
}
