import * as React from 'react';
import { Box, TextField, InputAdornment, Typography, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import lightTheme from '../theme/lightTheme';

function SearchBar({ placeholder, value, onChange, disabled = false, variant }) {
  const isActive = variant === 'active' || variant === 'typing';

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled || variant === 'disabled'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
        endAdornment: isActive && value && (
          <InputAdornment position="end">
            <IconButton onClick={() => onChange({ target: { value: '' } })} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: 250,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#CACACA',
          },
          '&:hover fieldset': {
            borderColor: '#CACACA',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#CACACA',
          },
          '&.Mui-disabled fieldset': {
            borderColor: '#CACACA',
          },
        },
        '& .MuiInputBase-input': {
          fontFamily: lightTheme.typography.fontFamily,
          fontSize: lightTheme.typography.fontSize,
          fontWeight: isActive ? 500 : 400,
        },
      }}
    />
  );
}

export default function SearchVariants() {
  const [searchValues, setSearchValues] = React.useState({
    search: '',
    default: '',
    hover: '',
    typing: '',
    active: '',
    disabled: '',
  });

  const handleInputChange = (variant) => (e) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      [variant]: e.target.value,
    }));
  };

  const variants = [
    { label: 'Search', variant: 'search', placeholder: 'Search by name' },
    { label: 'Default', variant: 'default', placeholder: 'Search by name' },
    { label: 'Hover', variant: 'hover', placeholder: 'Search by name' },
    { label: 'While typing', variant: 'typing', placeholder: 'Search by name' },
    { label: 'Active', variant: 'active', placeholder: 'Search by name' },
    { label: 'Disabled', variant: 'disabled', placeholder: 'Search by name' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {variants.map((variantData, index) => (
        <Box key={index} sx={{ marginBottom: 0 }}>
          <Typography variant="h6">{variantData.label}</Typography>
          <SearchBar
            placeholder={variantData.placeholder}
            value={searchValues[variantData.variant]}
            onChange={handleInputChange(variantData.variant)}
            variant={variantData.variant}
            disabled={variantData.variant === 'disabled'}
          />
        </Box>
      ))}
    </Box>
  );
}
