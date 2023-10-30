"use client"

import { HiArrowLongRight } from "react-icons/hi2"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { InlineFormError, TextField } from "../../atoms"

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
      username: "admin",
      password: "password"
    }
  })
  const router = useRouter()

  function onSubmit() {
    router.push("/dashboard")
  }

  return (
    <form className="container max-w-md px-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-t-lg bg-[#333838] px-7 pb-10 pt-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light tracking-wide text-white">
            Ackee
          </h1>
          <p className="mb-16 text-lg font-light tracking-wide text-[#8D8F8F]">
            Welcome back, sign in to continue.
          </p>
        </div>

        <div className="mb-4">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors && errors.username}
                placeholder="Username"
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={(data) => <InlineFormError data={data} />}
          />
        </div>

        <div className="mb-4">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                isPassword={true}
                error={errors && errors.password}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={(data) => <InlineFormError data={data} />}
          />
        </div>
      </div>
      <div className="flex">
        <Link
          className="rounded-bl-lg border-r border-t border-[#282d2d] bg-[#333838] px-7 py-4 text-[#9EA1A1] transition-colors duration-300 hover:bg-[#3D4242]"
          href="https://github.com/JuanjoFR/ackee-clone"
          target="_blank"
        >
          Help
        </Link>
        <button
          type="submit"
          className="w-full rounded-br-lg border-t border-[#282d2d] bg-[#333838] px-7 py-4 text-white transition-colors duration-300 hover:bg-[#3D4242]"
        >
          <div className="flex items-center justify-end">
            <span className="mr-1">Sign in</span>
            <HiArrowLongRight className="h-5 w-5" />
          </div>
        </button>
      </div>
    </form>
  )
}
