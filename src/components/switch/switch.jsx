import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, FormGroup, FormControlLabel, Switch, Typography } from '@mui/material';
import lightTheme from '../theme/lightTheme';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import Icon from '../../assets/svgImages/infoSvg';

// Custom styled Switch using values from lightTheme
const CustomStyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "28px",
  height: "18px",
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(10px)',
      color: lightTheme.palette.secondary.textColor,
      '& + .MuiSwitch-track': {
        backgroundColor: lightTheme.palette.secondary.main,
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: '#FFFFFF', // Set thumb color to white for disabled state
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      backgroundColor: lightTheme.palette.text.disabled, // Set background color to match the "Off" state
      opacity: 0.5,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 13,
    height: 13,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: lightTheme.palette.text.disabled, // Default track color from the theme
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function CustomSwitch({ 
  label, 
  defaultState = false, 
  disabled = false, 
  labelPlacement = 'end', 
  withIcon = false 
}) {
  const [checked, setChecked] = React.useState(defaultState);

  const handleToggle = (event) => {
    if (!disabled) {
      setChecked(event.target.checked);
    }
  };

  return (
    <Box onClick={() => !disabled && setChecked(!checked)} sx={{ cursor: disabled ? 'default' : 'pointer' }}>
      <FormControlLabel
        control={
          <CustomStyledSwitch
            checked={checked}
            onChange={handleToggle}
            disabled={disabled}
          />
        }
        label={
          withIcon ? (
            <Box display="flex" alignItems="center">
              <Box sx={{ paddingRight: "8px", paddingTop: "3px" }}>
                <Icon />
              </Box>
              <Typography 
                sx={{ 
                  color: "#FF980E", 
                  fontStyle: labelPlacement === 'bottom' ? 'italic' : 'normal' 
                }}
              >
                {label || (checked ? 'On' : 'Off')}
              </Typography>
            </Box>
          ) : (
            <Typography
              sx={{ 
                fontStyle: labelPlacement === 'bottom' ? 'italic' : 'normal' 
              }}
            >
              {label || (checked ? 'On' : 'Off')}
            </Typography>
          )
        }
        labelPlacement={labelPlacement}
        sx={{
          color: disabled ? lightTheme.palette.text.disabled : lightTheme.palette.text.primary,
          typography: lightTheme.typography.fontFamily,
          fontSize: lightTheme.typography.fontSize,
        }}
      />
    </Box>
  );
}

export default function AllSwitches() {
  return (
    <FormGroup>
      <CustomSwitch label="Default" defaultState={false} />
      <CustomSwitch label="Toggle" defaultState={true} />
      <CustomSwitch label="Disabled - Off" defaultState={false} disabled />
      <CustomSwitch label="Disabled - On" defaultState={true} disabled />
      <CustomSwitch 
        label="Switch along with label should be clickable" 
        defaultState={false} 
        labelPlacement="bottom"
        withIcon
      />
    </FormGroup>
  );
}
