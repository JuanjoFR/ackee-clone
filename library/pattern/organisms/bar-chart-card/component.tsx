"use client"

import * as React from "react"
import { BarChart } from "../../molecules"
import {
  ViewsStatisticsSummary,
  ViewsStatisticsSummaryItem,
  getViewsStatisticsSummary
} from "@/library/domain"
import { formatDistance, formatRelative } from "date-fns"
import enUS from "date-fns/locale/en-US"

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}

const locale = {
  ...enUS,
  formatRelative: (token: keyof typeof formatRelativeLocale) =>
    formatRelativeLocale[token]
} as Locale

export default function Component() {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<ViewsStatisticsSummary>()
  const [activeBar, setActiveBar] = React.useState<ViewsStatisticsSummaryItem>()

  async function fetch() {
    if (!loading && !data) {
      setLoading(true)

      const data = await getViewsStatisticsSummary()

      setData(data)
      setLoading(false)
    }
  }

  function setDefaultActiveBar() {
    if (data) {
      setActiveBar(data[data.length - 1])
    }
  }

  function getActiveDate() {
    if (data && activeBar) {
      const date = activeBar.date
      const baseDate = data[data.length - 1].date

      if (
        activeBar === data[data.length - 1] ||
        activeBar === data[data.length - 2]
      ) {
        return formatRelative(date, baseDate, { locale })
      }
      return formatDistance(date, baseDate, {
        addSuffix: true
      })
    }

    return ""
  }

  const fetchMemo = React.useCallback(fetch, [loading, data])
  const setDefaultActiveBarMemo = React.useCallback(setDefaultActiveBar, [data])

  React.useEffect(() => {
    fetchMemo()
  }, [fetchMemo])

  React.useEffect(() => {
    setDefaultActiveBarMemo()
  }, [setDefaultActiveBarMemo])

  return (
    <div className="rounded-lg bg-[#333838] p-7">
      <div className="mb-7">
        <h3 className="mb-1 text-3xl font-light tracking-wide text-white">
          Views
        </h3>
        <h5 className="text-lg font-light tracking-wide text-[#999C9C]">
          {!data ? "Loading..." : getActiveDate()}
        </h5>
      </div>
      <div className="h-64">
        {data && activeBar ? (
          <BarChart.Component
            data={data}
            activeBar={activeBar}
            onChange={setActiveBar}
          />
        ) : undefined}
      </div>
    </div>
  )
}
