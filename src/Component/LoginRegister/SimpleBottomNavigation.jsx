import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box 
      sx={{ 
        width: '100%', 
        position: 'fixed', 
        bottom: 0, 
        left: 0,
        bgcolor: 'black', 
        zIndex: 1000 
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: 'black' }}
      >
        <BottomNavigationAction 
          label="Recents" 
          icon={<RestoreIcon />} 
          sx={{ color: 'white' }} 
        />
        <BottomNavigationAction 
          label="Alerts" 
          icon={<AddAlertSharpIcon />} 
          sx={{ color: 'white' }} 
        />
        <BottomNavigationAction 
          label="Nearby" 
          icon={<LocationOnIcon />} 
          sx={{ color: 'white' }} 
        />
      </BottomNavigation>
    </Box>
  );
}
