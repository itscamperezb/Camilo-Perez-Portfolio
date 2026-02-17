import * as React from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import "../../App.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ placeSelf: "center", width: "100%" }}>
      <Box
        sx={{ placeSelf: "center", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          className="text-white w-[90%] place-self-center"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="PROJECTS"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="EXPERIENCE"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="CONTACT"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        sx={{ placeSelf: "center", fontSize: "5rem" }}
        value={value}
        index={0}
      >
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel
        sx={{ placeSelf: "center", fontSize: "5rem" }}
        value={value}
        index={1}
      >
        <Experience />
      </CustomTabPanel>
      <CustomTabPanel
        sx={{ placeSelf: "center", fontSize: "5rem" }}
        value={value}
        index={2}
      >
        <Contact />
      </CustomTabPanel>
    </Box>
  );
}
