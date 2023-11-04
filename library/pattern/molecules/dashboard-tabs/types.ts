import { ActiveInsightId } from "../insights-menu"

export interface Properties {
  activeMenuIndex: number
  activeDomainId?: string
  activeInsightId?: ActiveInsightId
}
