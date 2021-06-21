import React, { useState } from 'react';
import { CitySearch } from "../../components/CitySearch"
import { CityCard } from "../../components/CityCard";
import { CityFavorites } from '../../components/CityFavorites';
import { searchCityRequest } from '../../services/WeatherService';

import { CityInfoProps } from '../../interfaces/CityInfoProps'

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState<CityInfoProps | null>(null)
  const [favorites, setFavorites] = useState<CityInfoProps[] | []>([])

  const isCityFavorite = (id: number) => favorites.find(item => item.id === id) != null

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setSearchValue(e.target.value);
  };

  const handleSearchCity = () => {
    searchCityRequest(searchValue)  
    .then((response) => {
      const { data } = response

      const results = {
        id: data.id,             
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windSpeed: data.wind.speed
      }

      setSearchResult(results)
      setSearchValue('')
    })
    .catch(err => setError(err))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
      handleSearchCity()
    }
  }

  const handleCityFavorite = (id: number) => {
    let udpatedFavotites = []

    if (searchResult && !isCityFavorite(id)) {
      udpatedFavotites = [...favorites, searchResult]
    } else {
      udpatedFavotites = favorites.filter(item => item.id !== id)
    }

    setFavorites(udpatedFavotites)
  }

  return <div>
    <CitySearch 
      searchValue={searchValue}
      error={error}
      onChangeValue={changeSearchValue}
      handleSearch={handleSearchCity}
      handleKeyPress={handleKeyPress}
    />
    {
      searchResult == null ? null : 
        <CityCard 
          cityInfo={searchResult}
          isFavorite={isCityFavorite(searchResult.id)}
          onFavoriteClick={handleCityFavorite}
        />
    }
    { favorites.length > 0 && <CityFavorites items={favorites} /> }
  </div>
}