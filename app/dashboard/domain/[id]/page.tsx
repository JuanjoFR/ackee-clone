import { DashboardTabs, HeaderLogo } from "@/library/pattern/molecules"

export default function DomainPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-[#282d2d]">
      <HeaderLogo />
      <DashboardTabs.Component activeMenuIndex={1} activeDomainId={params.id} />
      <div className="container mx-auto">
        <h1>{`Domain ${params.id}`}</h1>
      </div>
    </main>
  )
}
