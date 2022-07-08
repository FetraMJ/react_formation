/*import React, {useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from '../components/authentification/Login';
import Register from '../components/authentification/Register';


import { Paper,Box,Typography } from '@mui/material';

export const LoginRegister = () => {
  
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const paperStyle={width:340,margin:'20px auto'}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  
  return (
  <Paper elevation={20} style={ paperStyle }>  
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Login" />
      <Tab label="Register" />
    </Tabs>
    <TabPanel value={value} index={0}>
     <Login/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Register/>
    </TabPanel>
  </Paper>
  )
}
*/