import { TooltipProperties } from "./types"

export default function Tooltip({ x, y, value, children }: TooltipProperties) {
  return (
    <div className="relative">
      {children}
      <div
        className="tooltip pointer-events-none absolute top-0 z-10"
        style={{
          transform: `translate(${x}px, ${y - 70}px)`
        }}
      >
        <div className="overflow-hidden font-light tracking-wide">
          <div className="relative bg-white px-4 py-2">{value}</div>
        </div>
      </div>
    </div>
  )
}
