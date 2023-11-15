import { GridProperties } from "./types"

export default function Grid({ yScale, width }: GridProperties) {
  return yScale.ticks(3).map((tickValue) => (
    <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
      <line x1={0} y1={0} x2={width} y2={0} stroke="#393E3E" />
    </g>
  ))
}
