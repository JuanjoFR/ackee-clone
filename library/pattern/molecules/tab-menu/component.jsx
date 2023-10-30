import { Menu } from "@headlessui/react"

// const links = [
//   { href: "/account-settings", label: "Account settings" },
//   { href: "/support", label: "Support" },
//   { href: "/license", label: "License" },
//   { href: "/sign-out", label: "Sign out" }
// ]

export default function Component() {
  return (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <span>menu</span>
    </Menu>
  )
}
