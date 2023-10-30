import React from "react"

export default React.forwardRef(function Component(
  { placeholder, error, isPassword, ...rest },
  ref
) {
  return (
    <input
      ref={ref}
      {...rest}
      type={isPassword ? "password" : "text"}
      className={`block w-full rounded-lg border-2 bg-[#3D4242] p-2 text-lg font-light text-white transition-colors duration-300 focus:border-[#73fac8] focus:outline-none ${
        error ? "border-red-500" : "border-transparent"
      }`}
      placeholder={placeholder}
    />
  )
})
