// import { Tab } from "@headlessui/react"
// import { TabMenu } from ".."
import Link from "next/link"

const categories = [
  {
    id: "1",
    label: "Overview",
    href: "/dashboard",
    content: <span>dashboard</span>
  },
  {
    id: "2",
    // label: <TabMenu />,
    label: "Domains",
    href: "/dashboard/domains",
    content: <span>domains</span>
  },
  {
    id: "3",
    label: "Insights",
    href: "/dashboard/insights",
    content: <span>insights</span>
  },
  {
    id: "4",
    label: "Settings",
    href: "/dashboard/settings",
    content: <span>settings</span>
  }
]

export default function Component({ activeIndex }) {
  return (
    <nav className="container mx-auto">
      <ul className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {categories.map((category, index) => (
          <li
            key={category.id}
            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
              index === activeIndex
                ? "bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            }`}
          >
            <Link href={category.href}>{category.label}</Link>
          </li>
        ))}
      </ul>

      {/* <Tab.Group
        selectedIndex={0}
        onChange={(index) => {
          console.log("on change", index)
        }}
      >
        <div className="container mx-auto px-8">
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`
                }
              >
                {category.label}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <div className="container mx-auto px-8">
          <Tab.Panels>
            {categories.map((category) => (
              <Tab.Panel key={category.id}>{category.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group> */}
    </nav>
  )
}
