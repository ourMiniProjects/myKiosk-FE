import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 500,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="당일 매출 조회" {...a11yProps(0)} />
        <Tab label="품목별 매출 조회" {...a11yProps(1)} />
        <Tab label="시간대별 매출 조회" {...a11yProps(2)} />
        <Tab label="영수증 조회" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        당일 매출 조회
      </TabPanel>
      <TabPanel value={value} index={1}>
        품목별 매출 조회
      </TabPanel>
      <TabPanel value={value} index={2}>
        시간대별 매출 조회
      </TabPanel>
      <TabPanel value={value} index={3}>
        영수증 조회
      </TabPanel>
    </Box>
  );
}
