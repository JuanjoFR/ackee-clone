import { LeftAxisProperties } from "./types"

export default function LeftAxis({ yScale, x }: LeftAxisProperties) {
  return yScale.ticks(3).map((tickValue) => (
    <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
      <line x1={x} y1={0} x2={0} y2={0} stroke="#393E3E" />
      <text
        style={{
          fontSize: "14px",
          fontWeight: "400",
          textAnchor: "start",
          transform: `translate(${x}px, -10px)`
        }}
        fill="#9A9C9C"
      >
        {tickValue}
      </text>
    </g>
  ))
}
