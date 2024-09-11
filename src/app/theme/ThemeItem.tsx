import React from "react"

function ThemeItem({
  number,
  title,
  description
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div
      key={number}
      className="p-4 md:p-6 border border-[#9E0521] rounded-3xl"
    >
      <div className="flex md:items-end mb-2  bg-text-gradient text-transparent bg-clip-text">
        <span className="text-4xl font-bold  mr-2">{number}{"."}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default ThemeItem
