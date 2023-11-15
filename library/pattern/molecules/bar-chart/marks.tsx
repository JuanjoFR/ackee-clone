import { MarksProperties } from "./types"

export default function Marks({
  data,
  xScaleWrapper,
  xScale,
  height,
  onMouseEnter,
  onMouseLeave,
  yScale,
  activeMark
}: MarksProperties) {
  return (
    <g onMouseLeave={onMouseLeave}>
      {data.map((d) => (
        <g key={d.id}>
          <rect
            x={xScaleWrapper(d.id)}
            y={0}
            width={xScaleWrapper.bandwidth()}
            height={height}
            fill="transparent"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              if (d.id !== activeMark.id) {
                // console.log("on mouse over", d.id)
                onMouseEnter(d)
              }
            }}
            // onMouseOver={() => {
            //   if (d.id !== activeMark.id) {
            //     // console.log("on mouse over", d.id)
            //     onMouseOver(d)
            //   }
            // }}
            // onMouseOut={() => {
            //   if (d.id !== data[data.length - 1].id) {
            //     // console.log("on mouse out", defaultItem.id)
            //     onMouseOut(d)
            //   }
            // }}
          />
          <rect
            x={xScale(d.id)}
            y={yScale(d.value)}
            width={xScale.bandwidth()}
            height={height - yScale(d.value)}
            fill="currentColor"
            pointerEvents="none"
            className={
              activeMark.id === d.id
                ? "text-[#73FAC8]"
                : "text-[#6e7373] hover:text-[#73FAC8]"
            }
          />
        </g>
      ))}
    </g>
  )
}
