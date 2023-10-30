export default function Component({ data }) {
  return (
    <p className="mt-2 rounded-md bg-red-200 px-3 py-1.5 text-sm text-red-800">
      {data.message}
    </p>
  )
}
