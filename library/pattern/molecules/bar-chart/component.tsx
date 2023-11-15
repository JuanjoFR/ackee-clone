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
  const chartSettings = {
    marginLeft: 40
  }
  const dms = useChartDimensions(ref, chartSettings)
  const xScaleWrapper = d3
    .scaleBand()
    .domain(data.map((d) => d.id))
    .range([0, dms.boundedWidth])
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.id))
    .range([0, dms.boundedWidth])
    .padding(0.3)
    .paddingOuter(0.15)
    .align(0.5)
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map((d) => d.value)) ?? 0])
    .range([dms.boundedHeight, 0])

  function calculateTooltipX() {
    const x = xScale(activeBar.id)

    if (x) {
      return x + dms.marginLeft
    }

    return 0
  }

  function handleMouseLeave() {
    onChange(data[data.length - 1])
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
            <Grid yScale={yScale} width={dms.boundedWidth} />
            <LeftAxis yScale={yScale} x={chartSettings.marginLeft * -1} />
            <Marks
              data={data}
              xScaleWrapper={xScaleWrapper}
              xScale={xScale}
              height={dms.boundedHeight}
              onMouseEnter={onChange}
              onMouseLeave={handleMouseLeave}
              yScale={yScale}
              activeMark={activeBar}
            />
          </g>
        </svg>
      </div>
    </Tooltip>
  )
}
