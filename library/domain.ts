import "server-only"
import { wait } from "./utilities"

export interface Domain {
  id: string
  name: string
  hotkey: string
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
