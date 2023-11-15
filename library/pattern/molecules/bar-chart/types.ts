import {
  ViewsStatisticsSummary,
  ViewsStatisticsSummaryItem
} from "@/library/domain"

// interface BarElementWrapperProperties {
//   x: React.SVGProps<SVGRectElement>["x"]
//   y: React.SVGProps<SVGRectElement>["y"]
//   width: React.SVGProps<SVGRectElement>["width"]
//   height: React.SVGProps<SVGRectElement>["height"]
// }

// interface BarElementProperties {
//   x: React.SVGProps<SVGRectElement>["x"]
//   y: React.SVGProps<SVGRectElement>["y"]
//   width: React.SVGProps<SVGRectElement>["width"]
//   height: React.SVGProps<SVGRectElement>["height"]
// }

// export interface BarProperties {
//   barElementWrapperProperties: BarElementWrapperProperties
//   barElementProperties: BarElementProperties
//   isActive: boolean
//   onMouseOver: React.SVGProps<SVGRectElement>["onMouseOver"]
//   onMouseOut: React.SVGProps<SVGRectElement>["onMouseOut"]
// }

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
