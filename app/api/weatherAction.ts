export interface WeatherDataProps {
  stargazers_count: number;
  description: string;
  name: string;
  language: string;
  html_url: string;
  created_at: string;
}
const getWeather = async (): Promise<any> => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=31.5125&lon=-9.77&appid=3efadf1ac9c74996e8571606181e3e75",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw Error("failed to fetch Repositories");
  }
  const data = response.json();
  return data;
};

export default getWeather;
