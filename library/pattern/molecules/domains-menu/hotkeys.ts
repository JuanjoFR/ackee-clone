"use client"

import { useHotkeys } from "react-hotkeys-hook"
import { HotkeysComponentProperties } from "./types"
import { useRouter } from "next/navigation"

export default function Hotkeys({ domains }: HotkeysComponentProperties) {
  const router = useRouter()

  function handlePress(event: KeyboardEvent) {
    if (domains) {
      const index = domains.map((domain) => domain.hotkey).indexOf(event.key)

      if (index !== -1) {
        router.push(`/dashboard/domain/${domains[index].id}`)
      }
    }
  }

  useHotkeys(domains?.map((domain) => domain.hotkey), handlePress)

  return null
}
