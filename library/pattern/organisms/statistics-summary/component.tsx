import { formatDuration as dateFormatDuration } from "date-fns"
import { ProgressionLabel } from "../../molecules"
import React from "react"
import { getStatisticsSummary } from "@/library/domain"

export default async function Component() {
  const data = await getStatisticsSummary()
  const numberFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  })

  function formatDuration(duration: Duration) {
    return dateFormatDuration(duration, {
      delimiter: ":",
      format: ["hours", "minutes"]
    })
      .replace(" hours", "")
      .replace(" minutes", "")
  }

  return (
    <div className="grid grid-cols-1 divide-x divide-y divide-[#282D2D] rounded-lg bg-[#333838] sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Active visitors
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {numberFormatter.format(data.activeVisitors)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              visitors
            </span>
          </div>
          <div className="rounded-full bg-[#477263] px-3 py-1 text-sm font-light text-[#73FAC8]">
            Live
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Average views
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {numberFormatter.format(data.averageViews.value)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              per day
            </span>
          </div>
          <ProgressionLabel
            direction={data.averageViews.direction}
            value={data.averageViews.progression}
          />
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Average duration
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {formatDuration(data.averageDuration.value)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              m
            </span>
          </div>
          <ProgressionLabel
            direction={data.averageDuration.direction}
            value={data.averageDuration.progression}
          />
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views today
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {numberFormatter.format(data.dailyViews)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views this month
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {numberFormatter.format(data.monthlyViews)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views this year
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              {numberFormatter.format(data.yearlyViews)}
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
