import * as React from 'react';

import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar({ onChange, onEnter } : { onChange: (e:any) => void, onEnter: () => void }) {

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      onEnter();
    }
  }

  return (
    <FormControl fullWidth hiddenLabel sx={{ m: 1 }} variant="outlined">
    <InputLabel htmlFor="search-bar">Link</InputLabel>
    <Input
      id="search-bar"
      type='text'
      onChange={onChange}
      onKeyPress={onKeyPress}
      endAdornment={
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      }
    />
  </FormControl>
  );
}