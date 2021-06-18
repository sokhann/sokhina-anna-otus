import React, { FC } from 'react';
import { 
  makeStyles,  
  createStyles, 
  Card,
  CardHeader,
  CardContent,
  IconButton
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { CityInfoProps } from '../../interfaces/CityInfoProps'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      position: 'relative',
      padding: 16
    },
    info: {
      display: 'flex',
      alignItems: 'baseline'
    },
    temperature: {
      fontSize: 32
    },
    description: {
      textTransform: 'uppercase',
      marginLeft: 16
    },
    iconButton: {
      position: 'absolute',
      top: 8,
      right: 4
    },
    header: {
      padding: '0 0 16px',
      borderBottom: '1px solid #eee'
    },
    content: {
      padding: '0 !important'
    },
    actions: {
      padding: 0
    }
  }),
);

interface CityCardProps {
  cityInfo: CityInfoProps
  isFavorite: boolean
  onFavoriteClick: (id: number) => void
}

export const CityCard: FC<CityCardProps> = ({
  cityInfo,
  isFavorite, 
  onFavoriteClick 
}) => {
  const classes = useStyles();
  const { id, city, country, temperature, description, humidity, windSpeed } = cityInfo

  return <Card className={classes.card}>
    <IconButton  className={classes.iconButton} aria-label="add to favorites" onClick={() => onFavoriteClick(id)}>
      { isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
    </IconButton>
    <CardHeader
      title={city}
      subheader={country}
      className={classes.header}
    />
    <CardContent className={classes.content}>
      <p className={classes.info}>
        <span className={classes.temperature}>{ Math.floor(temperature)}°C</span>
        <span className={classes.description}>{ description }</span>
      </p>
      <p>Humidity: { humidity }%</p>
      <p>Wind: { windSpeed }m/s</p>
    </CardContent>
  </Card>
}