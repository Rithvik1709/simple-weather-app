"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

interface WeatherCarouselProps {
  weatherData: any[]
  selectedDay: number
  onSelectDay: (index: number) => void
}

export default function WeatherCarousel({ weatherData, selectedDay, onSelectDay }: WeatherCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount = direction === "left" ? -200 : 200
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "☀️"
      case "cloudy":
        return "☁️"
      case "rainy":
        return "🌧️"
      case "snowy":
        return "❄️"
      default:
        return "☀️"
    }
  }

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white dark:bg-gray-800 shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {weatherData.map((day, index) => (
          <div
            key={index}
            onClick={() => onSelectDay(index)}
            className={`flex-shrink-0 w-[120px] p-3 rounded-lg cursor-pointer transition-all ${
              selectedDay === index
                ? "bg-blue-100 dark:bg-blue-900 shadow-md transform scale-105"
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{format(new Date(day.date), "EEE")}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{format(new Date(day.date), "MMM d")}</p>
              <div className="text-2xl my-2">{getWeatherIcon(day.condition)}</div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{day.temperature}°</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white dark:bg-gray-800 shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

