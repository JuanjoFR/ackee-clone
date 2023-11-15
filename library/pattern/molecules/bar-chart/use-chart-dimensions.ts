import { ResizeObserver } from "@juggle/resize-observer"
import React from "react"

interface Dimensions {
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  boundedWidth?: number
  boundedHeight?: number
  width?: number
  height?: number
}

interface NewDimensions {
  boundedHeight: number
  boundedWidth: number
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
  width: number
  height: number
}

interface Settings {
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}

function combineChartDimensions(dimensions: Dimensions) {
  const parsedDimensions = {
    ...dimensions,
    marginTop: dimensions.marginTop || 0,
    marginRight: dimensions.marginRight || 0,
    marginBottom: dimensions.marginBottom || 0,
    marginLeft: dimensions.marginLeft || 0
  }

  return {
    ...parsedDimensions,
    boundedHeight: parsedDimensions.height
      ? parsedDimensions.height -
        parsedDimensions.marginTop -
        parsedDimensions.marginBottom
      : 0,
    boundedWidth: parsedDimensions.width
      ? parsedDimensions.width -
        parsedDimensions.marginLeft -
        parsedDimensions.marginRight
      : 0
  }
}

export default function useChartDimensions(
  ref: React.RefObject<HTMLDivElement>,
  settings: Settings = {}
) {
  const dimensions = combineChartDimensions(settings)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  function createResizeObserver() {
    return new ResizeObserver((entries) => {
      console.log("resize observer triggered")
      // if (!Array.isArray(entries)) return
      // if (!entries.length) return
      // const entry = entries[0]
      // if (width != entry.contentRect.width)
      //   setWidth(entry.contentRect.width)
      // if (height != entry.contentRect.height)
      //   setHeight(entry.contentRect.height)

      if (dimensions.width && dimensions.height) {
        return null
      }

      if (!Array.isArray(entries)) {
        return null
      }

      if (!entries.length) {
        return null
      }

      const entry = entries[0]

      if (width !== entry.contentRect.width) {
        setWidth(entry.contentRect.width)
      }

      if (height !== entry.contentRect.height) {
        setHeight(entry.contentRect.height)
      }
    })
  }

  const resizeObserverMemo = React.useMemo(createResizeObserver, [
    dimensions.width,
    dimensions.height,
    width,
    height
  ])

  React.useEffect(() => {
    // console.log("use effect hook dispatched")

    // if (dimensions.width && dimensions.height) {
    //   console.log("dimensions width and height exists")

    //   // return [ref, dimensions]
    // } else {
    //   console.log("dimensions width and height doesn't exists")

    //   const element = ref.current
    //   const resizeObserver = new ResizeObserver((entries) => {
    //     console.log("resize trigger dispatched")
    //     // if (!Array.isArray(entries)) {
    //     //   console.log("entries is an array")
    //     // } else if (!entries.length) {
    //     //   console.log("entries is empty")
    //     // } else {
    //     //   console.log("only one entry")
    //     //   const entry = entries[0]

    //     //   if (width != entry.contentRect.width) {
    //     //     console.log("set width")
    //     //     setWidth(entry.contentRect.width)
    //     //   }

    //     //   if (height != entry.contentRect.height) {
    //     //     console.log("set height")
    //     //     setHeight(entry.contentRect.height)
    //     //   }
    //     // }
    //   })

    //   // console.log("check element", element)
    //   if (element) {
    //     resizeObserver.observe(element)

    //     return () => resizeObserver.unobserve(element)
    //   }

    //   // if (element) {
    //   //   resizeObserverMemo.observe(element)

    //   //   return () => resizeObserverMemo.unobserve(element)
    //   // }
    // }

    const element = ref.current

    if (element) {
      resizeObserverMemo.observe(element)

      return () => resizeObserverMemo.unobserve(element)
    }
  }, [ref, resizeObserverMemo])

  const newSettings = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height
  }) as NewDimensions

  return newSettings
}
