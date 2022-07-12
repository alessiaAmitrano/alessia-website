import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SyntheticEvent, useState } from 'react';

// create a context with the theme setting and sync the context with a cookie
function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onDarkModeChange = (e: SyntheticEvent) => {
    console.log('e', e);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div>
      <LightModeIcon fontSize='large' />
      <Switch defaultChecked value={isDarkMode} onChange={onDarkModeChange} />
      <DarkModeIcon fontSize='large' />
    </div>
  );
};
export default DarkModeSwitch;
