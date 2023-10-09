import React from "react"
import { Button, InputAdornment, Stack, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Footer = () => {
  return (
    <Stack px="18px" pb="18px" gap="12px">
      <Button
        variant="outlined"
        sx={{ height: "44px", fontSize: "16px", fontWeight: 600, textTransform: "capitalize" }}
      >
        Meeting Scores
      </Button>
      <Button
        variant="contained"
        sx={{ height: "44px", fontSize: "16px", fontWeight: 600, textTransform: "capitalize" }}
      >
        Schedule Meeting
      </Button>
      <TextField
        id="input-with-icon-textfield"
        label=""
        placeholder="Search MeetricsGPT..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="#C2C1C1" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          marginTop: "8px",
          "& .MuiInputBase-input": {
            padding: "10.5px 14px 10.5px 0",
          },
        }}
      />
    </Stack>
  )
}

export default Footer
