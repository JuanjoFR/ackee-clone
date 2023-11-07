import "server-only"
import { wait } from "./utilities"

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
