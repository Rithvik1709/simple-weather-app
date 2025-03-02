
export function generateWeatherData(date: Date) {
    const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy"]
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
  
  
    const month = date.getMonth()
    let baseTemp = 75 
  
    if (month >= 9 && month <= 11) baseTemp = 60 
    if (month >= 0 && month <= 2) baseTemp = 40 
    if (month >= 3 && month <= 5) baseTemp = 65 
  
   
    const temperature = Math.round(baseTemp + (Math.random() * 20 - 10))
  
    
    const hourlyForecast = Array.from({ length: 12 }, (_, i) => {
      const hour = (8 + i) % 24
      const hourFormatted = `${hour === 0 ? "12" : hour > 12 ? hour - 12 : hour}${hour >= 12 ? "PM" : "AM"}`
  
      
      let hourlyTemp = temperature
      if (hour >= 10 && hour <= 16) {
        hourlyTemp += Math.round(Math.random() * 5) 
      } else if (hour >= 0 && hour <= 6) {
        hourlyTemp -= Math.round(Math.random() * 8) 
      }
  
      return {
        time: hourFormatted,
        temperature: hourlyTemp,
        condition: conditions[Math.floor(Math.random() * conditions.length)],
      }
    })
  
    return {
      condition: randomCondition,
      temperature: temperature,
      feelsLike: Math.round(temperature + (Math.random() * 6 - 3)),
      humidity: Math.round(30 + Math.random() * 50),
      windSpeed: Math.round(5 + Math.random() * 15),
      precipitation: Math.round(Math.random() * 100),
      hourlyForecast,
    }
  }
  
  