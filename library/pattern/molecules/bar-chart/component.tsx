"use client"

import * as d3 from "d3"
import useChartDimensions from "./use-chart-dimensions"
import Grid from "./grid"
import LeftAxis from "./left-axis"
import Marks from "./marks"
import { ComponentProperties } from "./types"
import React from "react"
import Tooltip from "./tooltip"

export default function BarChart({
  data,
  activeBar,
  onChange
}: ComponentProperties) {
  const ref = React.useRef<HTMLDivElement>(null)
  // const ref = React.createRef<SVGSVGElement>()
  const chartSettings = {
    marginLeft: 40
    // marginRight: 1,
    // marginBottom: 1,
    // marginTop: 1
  }
  const dms = useChartDimensions(ref, chartSettings)
  // const xScale = d3
  //   .scaleTime()
  //   .domain([data[0].date, data[data.length - 1].date])
  //   .range([0, 100])
  // const xScale = React.useMemo(
  //   () => d3.scaleLinear().domain([0, 100]).range([10, dms.boundedWidth]),
  //   [dms.boundedWidth]
  // )
  // const yScale = React.useMemo(
  //   () =>
  //     d3
  //       .scaleBand()
  //       .domain(data.map((d, i) => (i + 1).toString()))
  //       .range([dms.boundedHeight, 0]),
  //   [dms.boundedHeight]
  // )

  // const xScaleBand = d3
  //   .scaleBand()
  //   .domain(data.map((d, i) => (i + 1).toString())) // descending frequency
  //   // .range([marginLeft, width - marginRight])
  //   .range([0, 100])
  // // .padding(0.3)
  // // .paddingInner(0.3)
  // const xScaleBandWithPadding = d3
  //   .scaleBand()
  //   .domain(data.map((d, i) => (i + 1).toString())) // descending frequency
  //   // .range([marginLeft, width - marginRight])
  //   .range([0, 100])
  //   .padding(0.3)
  //   .paddingOuter(0.15)
  //   .align(0.5)
  // const yScale = d3
  //   .scaleLinear()
  //   .domain([0, d3.max(data.map((d) => d.value)) ?? 0])
  //   .range([100, 0])
  const xScaleWrapper = d3
    .scaleBand()
    .domain(data.map((d) => d.id)) // descending frequency
    // .range([marginLeft, width - marginRight])
    .range([0, dms.boundedWidth])
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.id)) // descending frequency
    // .range([marginLeft, width - marginRight])
    .range([0, dms.boundedWidth])
    .padding(0.3)
    .paddingOuter(0.15)
    .align(0.5)
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map((d) => d.value)) ?? 0])
    .range([dms.boundedHeight, 0])
  // .padding(0.3)
  // .paddingInner(0.3)
  // const [activeBar, setActiveBar] = React.useState(data[data.length - 1])

  // const [width, setWidth] = React.useState(0)
  // const [height, setHeight] = React.useState(0)

  // const line = d3
  //   .line<(typeof data)[number]>()
  //   .x((d) => xScale(d.date))
  //   .y((d) => yScale(d.value))

  // const d = line(data)

  // React.useEffect(() => {
  //   console.log("active bar changed", activeBar)
  // }, [activeBar])

  // React.useEffect(() => {
  //   // const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290])
  //   // const yScale = d3
  //   //   .scaleLinear()
  //   //   .domain([0, d3.max(data.map((d) => d.value)) ?? 0])
  //   //   .range([100, 0])
  //   // const svgElement = d3.select(ref.current)
  //   // const axisGenerator = d3.axisBottom(xScale)
  //   // const yAxisGenerator = d3.axisLeft(yScale)
  //   // svgElement.append("g").call(axisGenerator)
  //   // svgElement.append("g").call(yAxisGenerator)
  // }, [])

  function calculateTooltipX() {
    const x = xScale(activeBar.id)

    if (x) {
      return x + dms.marginLeft
    }

    return 0
  }

  return (
    <Tooltip
      x={calculateTooltipX()}
      y={yScale(activeBar.value)}
      value={activeBar.value}
    >
      <div ref={ref} className="h-52 w-full">
        <svg width={dms.width} height={dms.height}>
          <g transform={`translate(${dms.marginLeft}, ${dms.marginTop})`}>
            {/* <rect
            width={dms.boundedWidth}
            height={dms.boundedHeight}
            fill="lavender"
          /> */}
            <Grid yScale={yScale} width={dms.boundedWidth} />
            <LeftAxis yScale={yScale} x={chartSettings.marginLeft * -1} />
            <Marks
              data={data}
              xScaleWrapper={xScaleWrapper}
              xScale={xScale}
              height={dms.boundedHeight}
              onMouseEnter={(bar) => {
                // console.log("on mouse over", bar.id)
                onChange(bar)
              }}
              onMouseLeave={() => {
                // console.log("on mouse out", bar.id)
                onChange(data[data.length - 1])
              }}
              yScale={yScale}
              activeMark={activeBar}
            />
            {/* <g transform={`translate(0, ${dms.boundedHeight})`}>
            <HorizontalAxis domain={xScale.domain()} range={xScale.range()} />
          </g>

          <g transform={`translate(100, 0)`}>
            <VerticalAxis domain={yScale.domain()} range={yScale.range()} />
          </g> */}
          </g>
        </svg>
      </div>
    </Tooltip>
  )
}
