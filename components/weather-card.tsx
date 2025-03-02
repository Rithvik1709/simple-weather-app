import { Cloud, CloudRain, CloudSnow, Droplets, Sun, Thermometer, Wind } from "lucide-react"

interface WeatherCardProps {
  weather: {
    formattedDate: string
    condition: string
    temperature: number
    feelsLike: number
    humidity: number
    windSpeed: number
    precipitation: number
    hourlyForecast: {
      time: string
      temperature: number
      condition: string
    }[]
  }
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-10 w-10 text-yellow-400" />
      case "cloudy":
        return <Cloud className="h-10 w-10 text-gray-400" />
      case "rainy":
        return <CloudRain className="h-10 w-10 text-blue-400" />
      case "snowy":
        return <CloudSnow className="h-10 w-10 text-blue-200" />
      default:
        return <Sun className="h-10 w-10 text-yellow-400" />
    }
  }

  const getSmallWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-5 w-5 text-yellow-400" />
      case "cloudy":
        return <Cloud className="h-5 w-5 text-gray-400" />
      case "rainy":
        return <CloudRain className="h-5 w-5 text-blue-400" />
      case "snowy":
        return <CloudSnow className="h-5 w-5 text-blue-200" />
      default:
        return <Sun className="h-5 w-5 text-yellow-400" />
    }
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{weather.formattedDate}</h2>
          <p className="text-gray-500 dark:text-gray-400">Today's Weather</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          {getWeatherIcon(weather.condition)}
          <div className="ml-4">
            <div className="text-4xl font-bold text-gray-900 dark:text-white">{weather.temperature}°</div>
            <div className="text-gray-500 dark:text-gray-400">{weather.condition}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center">
          <Thermometer className="h-6 w-6 text-orange-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Feels Like</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.feelsLike}°</p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center">
          <Droplets className="h-6 w-6 text-blue-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.humidity}%</p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center">
          <Wind className="h-6 w-6 text-teal-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.windSpeed} mph</p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center">
          <CloudRain className="h-6 w-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Precipitation</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.precipitation}%</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hourly Forecast</h3>
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {weather.hourlyForecast.map((hour, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">{hour.time}</p>
              <div className="my-2">{getSmallWeatherIcon(hour.condition)}</div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{hour.temperature}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

