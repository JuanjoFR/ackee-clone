import { Domain } from "@/library/domain"

export interface MainComponentProperties {
  isMenuActive: boolean
  activeDomain?: Domain
  allDomains: Domain[]
}

export interface HotkeysComponentProperties {
  domains: Domain[]
}
