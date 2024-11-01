import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import lightTheme from '../theme/lightTheme';

// Custom Tab component with conditional styling based on active and disabled states
const CustomTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isDisabled' && prop !== 'fontSize',
})(({ isActive, isDisabled, fontSize }) => ({
  borderBottom: '1px solid #e8e8e8',
  fontWeight: isActive ? 500 : 400, // Slightly bold for active tab
  fontFamily: lightTheme.typography.fontFamily, // Use Poppins font from theme
  fontSize: fontSize || lightTheme.typography.fontSize, // Apply custom or default font size
  paddingLeft: '0px', // Remove padding from labels
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

// CustomTabs component with title, tabs, selectedTab, onChange, disabledTabs, and fontSize as props
function CustomTabs({ title, tabs, selectedTab, onChange, disabledTabs = [], fontSize }) {
  return (
    <Box sx={{ width: '100%', mb: 6 }}>
      <Typography
        sx={{
          width: 'fit-content',
          whiteSpace: 'nowrap',
          fontFamily: lightTheme.typography.fontFamily,
          fontSize: fontSize || lightTheme.typography.fontSize, // Use custom font size or theme default
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
        TabIndicatorProps={{
          style: {
            width: '75px',
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
            fontSize={fontSize}
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
          { label: 'Other feedbacks' },
        ]}
        selectedTab={tab1}
        onChange={(event, newValue) => setTab1(newValue)}
        fontSize="16px" // Example of custom font size for title and tabs
      />

      <CustomTabs
        title="Other states"
        tabs={[
          { label: 'From me (2)' },
          { label: 'To me (5)' },
          { label: 'Other feedbacks' },
        ]}
        selectedTab={tab2}
        onChange={() => {}}
        fontSize="14px" // Another custom font size
      />

      <CustomTabs
        title="Disabled"
        tabs={[
          { label: 'From me (2)' },
          { label: 'To me (5)' },
          { label: 'Other feedbacks' },
        ]}
        selectedTab={tab3}
        onChange={() => {}}
        disabledTabs={[1, 2]} // Disables the second and third tab
        fontSize="12px" // Custom font size for disabled tabs
      />
    </Box>
  );
}
