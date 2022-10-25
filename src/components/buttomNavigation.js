import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('/');
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    return navigate(newValue);
  };

  return (
    <BottomNavigation showLabels sx={{ width: "100%", position: "fixed", bottom: "-1px", zIndex: 2 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Accueil"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Libreville"
        value="libreville"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        label="Port-Gentil"
        value="port-gentil"
        icon={<GroupIcon />}
      />
    </BottomNavigation>
  );
}
