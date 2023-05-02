import { useEffect, useState } from 'react';

type WeatherData = {
    temperature: number;
    description: string;
    icon: string;
};

type WeatherProps = {
    city: string;
    country: string;
};

const Weather = ({ city, country }: WeatherProps) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
            );

            const data = await response.json();

            setWeatherData({
                temperature: data.main.temp,
                description: data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            });
        };

        fetchWeatherData();
    }, [city, country]);

    return (
        <div className="flex flex-col items-center">
            {weatherData ? (
                <>
                    <img src={weatherData.icon} alt="Weather Icon" className="h-16 w-16" />
                    <div className="text-2xl font-bold">{weatherData.temperature}&deg;C</div>
                    <div className="text-lg">{weatherData.description}</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Weather;
