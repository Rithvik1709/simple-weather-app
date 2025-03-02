"use client"

import { useState, useEffect } from "react"
import { format, subDays } from "date-fns"
import WeatherCard from "./weather-card"
import WeatherCarousel from "./weather-carousel"
import { generateWeatherData } from "@/lib/weather-data"

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<any[]>([])
  const [selectedDay, setSelectedDay] = useState(0)

  useEffect(() => {
    // Generate mock weather data for the last 7 days
    const data = Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), i)
      return {
        date,
        formattedDate: format(date, "EEEE, MMMM d"),
        ...generateWeatherData(date),
      }
    }).reverse()

    setWeatherData(data)
  }, [])

  if (weatherData.length === 0) {
    return <div className="text-center py-10">Loading weather data...</div>
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {weatherData[selectedDay] && <WeatherCard weather={weatherData[selectedDay]} />}
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Last 7 Days</h2>
        <WeatherCarousel weatherData={weatherData} selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      </div>
    </div>
  )
}

