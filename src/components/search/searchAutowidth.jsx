import * as React from 'react';
import { Box, TextField, InputAdornment, Typography, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import lightTheme from '../theme/lightTheme';

function SearchBar({ placeholder, value, onChange, disabled = false, active = false }) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
        endAdornment: active && value && (
          <InputAdornment position="end">
            <IconButton onClick={() => onChange({ target: { value: '' } })} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: 250, // Set width from requirements
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#CACACA', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#CACACA', // Hover border color
          },
          '&.Mui-focused fieldset': {
            borderColor: '#CACACA', // Focus border color
          },
          '&.Mui-disabled fieldset': {
            borderColor:'#CACACA', // Disabled border color
          },
        },
        '& .MuiInputBase-input': {
          fontFamily: lightTheme.typography.fontFamily, // Apply font family from theme
          fontSize: lightTheme.typography.fontSize, // Apply font size from theme
          fontWeight: active ? 500 : 400, // Medium font style when active, regular otherwise
        },
      }}
    />
  );
}

export default function SearchVariants() {
  const [defaultValue, setDefaultValue] = React.useState('');
  const [hoverValue, setHoverValue] = React.useState('');
  const [typingValue, setTypingValue] = React.useState('Sel');
  const [activeValue, setActiveValue] = React.useState('Search Text');
  const [disabledValue] = React.useState('');

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      <Box sx={{ marginBottom: 0 }}> {/* Adjust this value for spacing */}
        <Typography variant="h6">Search</Typography>
        <SearchBar placeholder="Search by name" value={defaultValue} onChange={(e) => setDefaultValue(e.target.value)} />
      </Box>

      <Box sx={{ marginBottom: 0 }}> {/* Adjust this value for spacing */}
        <Typography variant="h6">Default</Typography>
        <SearchBar placeholder="Search by name" value={defaultValue} onChange={(e) => setDefaultValue(e.target.value)} />
      </Box>

      <Box sx={{ marginBottom: 0 }}> {/* Adjust this value for spacing */}
        <Typography variant="h6">Hover</Typography>
        <SearchBar placeholder="Search by name" value={hoverValue} onChange={(e) => setHoverValue(e.target.value)} />
      </Box>

      <Box sx={{ marginBottom: 0 }}> {/* Adjust this value for spacing */}
        <Typography variant="h6">While typing</Typography>
        <SearchBar placeholder="Search by name" value={typingValue} onChange={(e) => setTypingValue(e.target.value)} active />
      </Box>

      <Box sx={{ marginBottom: 0}}> {/* Adjust this value for spacing */}
        <Typography variant="h6">Active</Typography>
        <SearchBar placeholder="Search by name" value={activeValue} onChange={(e) => setActiveValue(e.target.value)} active />
      </Box>

      <Box sx={{ marginBottom: 0 }}> {/* Adjust this value for spacing */}
        <Typography variant="h6">Disabled</Typography>
        <SearchBar placeholder="Search by name" value={disabledValue} onChange={() => {}} disabled />
      </Box>
    </Box>
  );
}
