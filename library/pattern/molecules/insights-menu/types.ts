export type ActiveInsightId =
  | "views"
  | "pages"
  | "referrers"
  | "durations"
  | "events"
  | "systems"
  | "devices"
  | "browsers"
  | "sizes"
  | "languages"

export interface MainComponentProperties {
  isMenuActive: boolean
  activeInsightId?: ActiveInsightId
}
