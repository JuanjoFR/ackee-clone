import {
  HiArrowRightCircle,
  HiArrowUpCircle,
  HiArrowDownCircle
} from "react-icons/hi2"
import { Properties } from "./types"

export default function ProgressionLabel({ direction, value }: Properties) {
  function getBackgroundColorClassName() {
    switch (direction) {
      case "neutral": {
        return "bg-[#717474]"
      }
      case "positive": {
        return "bg-[#477263]"
      }
      case "negative": {
        return "bg-[#6F564A]"
      }
      default: {
        throw new Error(`Unknown direction for background color "${direction}"`)
      }
    }
  }

  function getTextColorClassName() {
    switch (direction) {
      case "neutral": {
        return "text-[#B8BABA]"
      }
      case "positive": {
        return "text-[#73FAC8]"
      }
      case "negative": {
        return "text-[#FA9A73]"
      }
      default: {
        throw new Error(`Unknown direction for text color "${direction}"`)
      }
    }
  }

  function getIconElement() {
    switch (direction) {
      case "neutral": {
        return <HiArrowRightCircle className="mr-1 h-6 w-6" />
      }
      case "positive": {
        return <HiArrowUpCircle className="mr-1 h-6 w-6 rotate-45" />
      }
      case "negative": {
        return <HiArrowDownCircle className="mr-1 h-6 w-6 -rotate-45" />
      }
      default: {
        throw new Error(`Unknown direction for icon element "${direction}"`)
      }
    }
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full ${getBackgroundColorClassName()} py-1 pl-1 pr-3 text-sm font-light ${getTextColorClassName()}`}
    >
      {getIconElement()}
      <span>{`${value}%`}</span>
    </div>
  )
}
