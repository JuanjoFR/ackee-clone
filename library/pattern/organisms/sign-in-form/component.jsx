"use client"

import { HiArrowLongRight } from "react-icons/hi2"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Please fill in the username"),
    password: yup.string().required("Please fill in the password")
  })
  .required()

export default function Component() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  function onSubmit(values) {
    console.log("on submit", values)
  }

  return (
    <form className="m-8 max-w-md flex-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-t-lg bg-[#333838] px-7 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light tracking-wide text-white">
            Ackee
          </h1>
          <p className="mb-16 text-lg font-light tracking-wide text-white opacity-50">
            Welcome back, sign in to continue.
          </p>
        </div>

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`block w-full rounded-lg border-2 border-transparent bg-white bg-opacity-5 p-2 text-lg font-light text-white transition-colors duration-300 focus:border-[#73fac8] focus:outline-none ${
                errors && errors.username ? "mb-2" : "mb-4"
              }`}
              placeholder="Username"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => (
            <p className="mb-4 rounded-md bg-red-200 px-3 py-1.5 text-sm text-red-800">
              {message}
            </p>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              className={`block w-full rounded-lg border-2 border-transparent bg-white bg-opacity-5 p-2 text-lg font-light text-white transition-colors duration-300 focus:border-[#73fac8] focus:outline-none ${
                errors && errors.password ? "mb-2" : "mb-4"
              }`}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <p className="rounded-md bg-red-200 px-3 py-1.5 text-sm text-red-800">
              {message}
            </p>
          )}
        />
      </div>
      <div className="flex">
        <button
          type="button"
          className="rounded-bl-lg border-r border-t border-[#282d2d] bg-[#333838] px-7 py-4 text-[#9EA1A1] transition-colors duration-300 hover:bg-[#3D4242]"
        >
          Help
        </button>
        <button
          type="submit"
          className="w-full rounded-br-lg border-t border-[#282d2d] bg-[#333838] px-7 py-4 text-white transition-colors duration-300 hover:bg-[#3D4242]"
        >
          <div className="flex items-center justify-end">
            <span className="mr-2">Sign in</span>
            <HiArrowLongRight className="h-5 w-5" />
          </div>
        </button>
      </div>
    </form>
  )
}