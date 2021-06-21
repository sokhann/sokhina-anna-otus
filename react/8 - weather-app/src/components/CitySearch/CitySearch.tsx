import React, { FC } from 'react';
import { makeStyles, createStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() =>
  createStyles({
    search: {
      position: 'relative',
      padding: '2px 4px',
      margin: '24px 0 36px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    results: {
      padding: 16,
    },
    error: {
      position: 'absolute',
      bottom: -28,
      right: 0,
      color: '#e53935'
    }
  }),
);

interface SearchProps {
  searchValue: string
  error: Error | null
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearch: () => void
  handleKeyPress?: (e: React.KeyboardEvent) => void
}

export const CitySearch: FC<SearchProps> = ({ searchValue, error, onChangeValue, handleSearch, handleKeyPress }) => {
  const classes = useStyles();

  return <Paper className={classes.search}>
      <InputBase
        className={classes.input}
        placeholder="Enter city..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={onChangeValue}
        onKeyPress={handleKeyPress}
      />
      { error && <span className={classes.error}>{error.message}</span> }
      <IconButton className={classes.iconButton} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
}