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

export default function Navtab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          placeSelf: "center",
          textColor: "white",
        }}
      >
        <Tabs
          className="place-self-center max-sm:w-[85%] sm:w-[90%] "
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="secondary tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="Projects"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="Experience"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "white",
              "&:hover": { color: "#3b82f6" },
              fontSize: 20,
            }}
            label="Contact"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Experience />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
    </Box>
  );
}
