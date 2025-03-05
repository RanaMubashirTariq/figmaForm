import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Switch,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

const SettingsDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer open/close
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  // Function to handle dark mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Add logic here to apply dark mode to your app
    console.log("Dark Mode:", !darkMode);
  };

  return (
    <div>
      {/* Button to open the drawer */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer Component */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Drawer Header */}
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <SettingsIcon sx={{ marginRight: 1 }} />
            Settings
          </Typography>

          {/* Settings List */}
          <List>
            {/* Dark Mode Toggle */}
            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
              <Switch
                checked={darkMode}
                onChange={handleDarkModeToggle}
                color="primary"
              />
            </ListItem>

            {/* Add more settings here */}
            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
              <Switch color="primary" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingsDrawer;