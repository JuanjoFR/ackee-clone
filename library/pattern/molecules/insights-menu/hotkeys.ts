"use client"

import { useHotkeys } from "react-hotkeys-hook"
import { useRouter } from "next/navigation"

export default function Hotkeys() {
  const router = useRouter()

  function handlePress(event: KeyboardEvent) {
    switch (event.key) {
      case "v": {
        router.push("/dashboard/insights/views")
        break
      }
      case "p": {
        router.push("/dashboard/insights/pages")
        break
      }
      case "r": {
        router.push("/dashboard/insights/referrers")
        break
      }
      case "d": {
        router.push("/dashboard/insights/durations")
        break
      }
      case "e": {
        router.push("/dashboard/insights/events")
        break
      }
      default: {
        throw new Error("Unknown hotkey")
      }
    }
  }

  useHotkeys(["v", "p", "r", "d", "e"], handlePress)

  return null
}
