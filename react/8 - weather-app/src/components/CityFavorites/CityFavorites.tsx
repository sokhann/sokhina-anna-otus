import React, { FC } from 'react';
import { makeStyles, createStyles, Paper, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import { CityInfoProps } from '../../interfaces/CityInfoProps'

const useStyles = makeStyles(() =>
  createStyles({
    listbox: {
      marginTop: 36
    },
    title: {
      marginBottom: 10,
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 600,
      color: '#999'
    }
  })
);

interface CityFavoritesProps {
  items: CityInfoProps[]
}

export const CityFavorites: FC<CityFavoritesProps> = ({ items }) => {
  const classes = useStyles();

  return <div className={classes.listbox}>
    <Typography variant="h6" className={classes.title}>Favorites</Typography>
    <Paper>
      <List>
        {
          items.map(item => {
            return <ListItem>
              <ListItemText primary={item.city} />
              {/* <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction> */}
            </ListItem>
          })
        }
      </List>
    </Paper>
  </div>
}