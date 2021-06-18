import axios, { AxiosResponse } from 'axios';

const API_KEY: string = '73efba092715a3960a70bf1cdace5473';
const SEARCH_CITY_URL: string = 'http://api.openweathermap.org/data/2.5/weather';


export function searchCityRequest(query: string): Promise<AxiosResponse> {
  const url = `${SEARCH_CITY_URL}?q=${query}&units=metric&appid=${API_KEY}`
  return axios.get(url);
}