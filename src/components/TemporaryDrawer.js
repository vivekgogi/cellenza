import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      bgcolor="#171717"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <Link to="/">
              <ListItemText>LOL Home</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="https://witsolapur.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText>WIT Home</ListItemText>
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link to="/about">
              <ListItemText>About</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link to="/events">
              <ListItemText>Events</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link to="/team">
              <ListItemText>Team</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="https://lolclubwit.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText>Blog</ListItemText>
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link to="/alumniconnect">Alumni Connect</Link>
          </ListItemButton>
        </ListItem>

        <Outlet />
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
