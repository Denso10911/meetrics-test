import React, { useMemo, useState } from "react"
import { Box, Stack, Tab, Tabs } from "@mui/material"
import Dashboard from "../Dashboard"
import PostMeeting from "../PostMeeting"
import PreMeeting from "../PreMeeting"
import CustomTabPanel from "../CustomTabPanel"
import CustomTabLabel from "../CustomTabLabel"

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const MeetricsTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setValue(newValue)
  }

  const tabs = useMemo(
    () => [
      { id: 0, label: "Dashboard", count: 1, tabPanel: <Dashboard /> },
      { id: 1, label: "Pre Meeting", count: 1, tabPanel: <PostMeeting /> },
      { id: 2, label: "Post Meeting", count: 1, tabPanel: <PreMeeting /> },
    ],
    []
  )

  return (
    <Stack flex={1}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "0 7px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            minHeight: "30px",
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
            "& .MuiTabs-indicator": {
              borderRadius: "5px",
              height: "3px",
            },
          }}
        >
          {tabs.map(el => (
            <Tab
              key={el.id}
              label={
                <CustomTabLabel count={el.count} label={el.label} isActive={el.id === value} />
              }
              {...a11yProps(el.id)}
              sx={{
                minHeight: "30px",
                padding: "2px 0",
                textTransform: "capitalize",
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map(el => (
        <CustomTabPanel key={el.id} value={value} index={el.id}>
          {el.tabPanel}
        </CustomTabPanel>
      ))}
    </Stack>
  )
}

export default MeetricsTabs
