import { DashboardTabs } from "@/library/pattern/molecules"

export default function DashboardPage() {
  return (
    <main className="h-screen bg-[#282d2d]">
      <DashboardTabs activeIndex={0} />
      <div className="container mx-auto">
        <h1>Dashboard</h1>
      </div>
    </main>
  )
}
