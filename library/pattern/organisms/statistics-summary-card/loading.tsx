export default async function Loading() {
  return (
    <div className="grid grid-cols-1 divide-x divide-y divide-[#282D2D] rounded-lg bg-[#333838] sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Active visitors
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              visitors
            </span>
          </div>
          <div className="rounded-full bg-[#477263] px-3 py-1 text-sm font-light text-[#73FAC8]">
            Live
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Average views
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              per day
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Average duration
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0:00
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              m
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views today
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views this month
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <h4 className="mb-6 text-lg font-light tracking-wide text-white">
          Views this year
        </h4>
        <div className="flex items-end justify-between">
          <div>
            <span className="mr-2 text-4xl font-light tracking-wide text-white">
              0
            </span>
            <span className="text-lg font-light tracking-wide text-[#999C9C]">
              views
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
