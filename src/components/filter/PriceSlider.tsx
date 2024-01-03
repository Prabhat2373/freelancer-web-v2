import React, { useState } from "react"

const PriceSlider = () => {
  const [value, setValue] = useState(0)

  const updateThumbValue = (event) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  const thumbPosition = (value / 1000) * 100

  return (
    <div className="relative mb-4">
      {/* Tick marks for 0 Rs and 100 Rs */}
      <div className="flex justify-between text-gray-500">
        <span>0 Rs</span>
        <span>{value} Rs</span>
      </div>

      {/* Slider with droplet */}
      <div className="relative">
  
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="1000"
          step="1"
          value={value}
          onChange={updateThumbValue}
          className="appearance-none  w-full bg-[#C4C4C4] h-1 p-0 m-0 rounded-md outline-none focus:outline-none active:bg-blue-500"
        />
      </div>

      {/* <p className="text-center text-blue-500 font-semibold">{`${value} Rs`}</p> */}
    </div>
  )
}

export default PriceSlider
