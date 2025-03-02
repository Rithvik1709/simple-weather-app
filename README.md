# Simple Weather App

## Overview
The **Simple Weather App** is a lightweight web application that provides real-time weather updates based on user input. It fetches weather data from an API and displays temperature, humidity, and weather conditions.

## Features
- Search weather by city name
- Display temperature, humidity, and weather description
- User-friendly and responsive UI
- Fetches live data using a weather API

## Technologies Used
- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **date-fns**: Date manipulation library

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Rithvik1709/simple-weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd simple-weather-app
   ```
3. Install dependencies:
   ```shell
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```shell
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure
```plaintext
weather-app/
├── app/                  # Next.js app directory
│   └── page.tsx          # Main page component
├── components/           # React components
│   ├── weather-card.tsx  # Detailed weather display
│   ├── weather-carousel.tsx # 7-day navigation carousel
│   └── weather-dashboard.tsx # Main dashboard component
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── weather-data.ts   # Mock weather data generator
└── public/               # Static assets
```

## Customization
### Connecting to a Real Weather API
The app currently uses mock data generated in `lib/weather-data.ts`. To connect to a real weather API:

1. Create an account with a weather service provider (OpenWeatherMap, WeatherAPI, etc.)
2. Obtain an API key
3. Create a new file in the `lib` directory to handle API requests
4. Update the `WeatherDashboard` component to fetch real data

Example API integration:
```typescript
// lib/weather-api.ts
export async function fetchWeatherData(date: Date) {
  const response = await fetch(
    `https://api.weatherservice.com/data?date=${date.toISOString()}&apiKey=${process.env.WEATHER_API_KEY}`
  );
  return response.json();
}
```

### Styling
The app uses Tailwind CSS for styling. You can customize the appearance by:
1. Modifying the color classes in the components
2. Updating the Tailwind configuration in `tailwind.config.js`
3. Adding custom CSS in a global stylesheet

## Future Improvements
- Add geolocation to automatically detect user's location
- Implement weather forecasting for upcoming days
- Add weather alerts and notifications
- Include more detailed metrics like UV index, air quality, etc.
- Add animations for weather conditions
- Implement unit switching (Celsius/Fahrenheit)

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Create a Pull Request.

## License
This project is licensed under the MIT License.
