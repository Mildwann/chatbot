import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tab1 from './chat'; // Ensure these are the correct imports
import Tab2 from './test';
import './../../css/tabview.css'

export default function TabView() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
      <Tabs className='tabview-frame'
        value={value} //here
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="undefined"
      >
        <Tab value="one" label="chat" />
        <Tab value="two" label="My Project"  />
        <Tab value="three" label="Brand Voice" />
        <Tab value="four" label="Templates" />
        <Tab value="five" label="Tools" />
      </Tabs>
      <Box sx={{ p: 5 }}>
        {value === 'one' && <Tab1 />}
        {value === 'two' && <Tab2 />}
        {value === 'three' && <div>Content for Tab Three</div>}
        {value === 'four' && <div>ttt</div>}
        {value === 'five' && <div>Content</div>}
      </Box>
    </Box>
  );
}
