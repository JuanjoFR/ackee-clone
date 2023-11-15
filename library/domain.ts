import { wait } from "./utilities"
import { subDays } from "date-fns"

export interface Domain {
  id: string
  name: string
  hotkey: string
}

export type Direction = "neutral" | "positive" | "negative"

interface AverageViews {
  value: number
  progression: number
  direction: Direction
}

interface AverageDuration {
  value: { hours: number; minutes: number }
  progression: number
  direction: Direction
}

export interface StatisticsSummary {
  activeVisitors: number
  averageViews: AverageViews
  averageDuration: AverageDuration
  dailyViews: number
  monthlyViews: number
  yearlyViews: number
}

export interface ViewsStatisticsSummaryItem {
  id: string
  date: Date
  value: number
}

export type ViewsStatisticsSummary = ViewsStatisticsSummaryItem[]

export async function getDomains() {
  await wait()

  return [
    { id: "1", name: "Ackee", hotkey: "0" },
    { id: "2", name: "Coffee Table", hotkey: "1" },
    { id: "3", name: "Electerious", hotkey: "2" },
    { id: "4", name: "LaudableApps", hotkey: "3" }
  ]
}

export async function getStatisticsSummary() {
  await wait(4000)

  return {
    activeVisitors: 8,
    averageViews: {
      value: 139,
      progression: 0,
      direction: "neutral"
    },
    averageDuration: {
      value: { hours: 7, minutes: 27 },
      progression: 2,
      direction: "neutral"
    },
    dailyViews: 69,
    monthlyViews: 703,
    yearlyViews: 41400
  } as StatisticsSummary
}

export async function getViewsStatisticsSummary() {
  await wait(3000)

  const today = new Date()

  return [
    { id: "1", date: subDays(today, 13), value: 186 },
    { id: "2", date: subDays(today, 12), value: 144 },
    { id: "3", date: subDays(today, 11), value: 185 },
    { id: "4", date: subDays(today, 10), value: 116 },
    { id: "5", date: subDays(today, 9), value: 100 },
    { id: "6", date: subDays(today, 8), value: 89 },
    { id: "7", date: subDays(today, 7), value: 136 },
    { id: "8", date: subDays(today, 6), value: 188 },
    { id: "9", date: subDays(today, 5), value: 155 },
    { id: "10", date: subDays(today, 4), value: 185 },
    { id: "11", date: subDays(today, 3), value: 112 },
    { id: "12", date: subDays(today, 2), value: 95 },
    { id: "13", date: subDays(today, 1), value: 86 },
    { id: "14", date: today, value: 63 }
  ] as ViewsStatisticsSummary
}
