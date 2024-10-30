import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import lightTheme from '../theme/lightTheme';

// Custom Tab component to apply conditional styling based on active and disabled states
const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled',
})(({ theme, isActive, isDisabled }) => ({
  borderBottom: '1px solid #e8e8e8',
  
  fontWeight: isActive ? 500 : 400, // Slightly bold for active tab
  fontFamily: lightTheme.typography.fontFamily, // Use Poppins font from theme
  fontSize: lightTheme.typography.fontSize, // Apply custom font size
  paddingLeft: '0px', // Remove padding from labels
  // Remove minimum height restriction if needed
  color: isDisabled
    ? lightTheme.palette.text.disabled
    : isActive
    ? lightTheme.palette.text.primary
    : lightTheme.palette.text.secondary, // Shaded for inactive tabs, disabled color for disabled tabs
  opacity: isDisabled ? 0.5 : 1,
  '&:focus': {
    outline: 'none',
  },
}));


// CustomTabs component that takes tabs, selectedTab, onChange, and disabledTabs as props
function CustomTabs({ title, tabs, selectedTab, onChange, disabledTabs = [] }) {
  return (
    <Box sx={{ width: '100%', mb: 6 }}>
      <Typography
        sx={{
          width: 'fit-content', // Ensure it only takes up the required space
          whiteSpace: 'nowrap',
          fontFamily: lightTheme.typography.fontFamily,
          fontSize: lightTheme.typography.fontSize,
          color: lightTheme.palette.text.primary,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={onChange}
        indicatorColor="primary"
        textColor="#B9B9B9"
        TabIndicatorProps={{
          style: {
            width: '75px', // Make this match Typography width or set it directly
          },
        }}
        sx={{
          '& .MuiTabs-indicator': {
            width: '100%', // Extend the indicator to match the full tab
            height: '2px', // Adjust thickness of the indicator line
          },
        }}
      >
        {tabs.map((tab, index) => (
          <CustomTab
            key={index}
            label={tab.label} 
            isActive={selectedTab === index}
            isDisabled={disabledTabs.includes(index)}
            disabled={disabledTabs.includes(index)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
// Main component to render different CustomTabs instances
export default function AllTab() {
  const [tab1, setTab1] = React.useState(0);
  const [tab2] = React.useState(1);
  const [tab3] = React.useState(0);

  return (
    <Box>
      <CustomTabs
        title="Tab"
        tabs={[
          { label: 'From me (2)' },
          { label: 'To me (5)' },
          { label: 'Other feedbacks' }
        ]}
        selectedTab={tab1}
        onChange={(event, newValue) => setTab1(newValue)}
      />

      <CustomTabs
        title="Other states"
        tabs={[
          { label: 'From me (2)' },
          { label: 'To me (5)' },
          { label: 'Other feedbacks' }
        ]}
        selectedTab={tab2}
        onChange={() => {}}
      />

      <CustomTabs
        title="Disabled"
        tabs={[
          { label: 'From me (2)' },
          { label: 'To me (5)' },
          { label: 'Other feedbacks' }
        ]}
        selectedTab={tab3}
        onChange={() => {}}
        disabledTabs={[1, 2]} // Disables the second and third tab
      />
    </Box>
  );
}
