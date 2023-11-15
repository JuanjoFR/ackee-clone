import {
  ViewsStatisticsSummary,
  ViewsStatisticsSummaryItem
} from "@/library/domain"

export interface GridProperties {
  yScale: d3.ScaleLinear<number, number>
  width: number
}

export interface LeftAxisProperties {
  yScale: d3.ScaleLinear<number, number>
  x: number
}

export interface MarksProperties {
  data: ViewsStatisticsSummary
  xScaleWrapper: d3.ScaleBand<string>
  xScale: d3.ScaleBand<string>
  height: number
  onMouseEnter: (mark: ViewsStatisticsSummaryItem) => void
  onMouseLeave: () => void
  yScale: d3.ScaleLinear<number, number>
  activeMark: ViewsStatisticsSummaryItem
}

export interface ComponentProperties {
  data: ViewsStatisticsSummary
  activeBar: ViewsStatisticsSummaryItem
  onChange: (bar: ViewsStatisticsSummaryItem) => void
}

export interface TooltipProperties {
  x: number
  y: number
  value: number
  children: React.ReactNode
}
