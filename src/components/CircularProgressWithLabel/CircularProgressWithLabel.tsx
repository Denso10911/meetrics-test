import React from "react"
import { Box, CircularProgress, circularProgressClasses, Typography } from "@mui/material"

interface Props {
  value: number
}

const CircularProgressWithLabel: React.FC<Props> = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={100}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        disableShrink
        sx={{
          color: theme => (theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"),
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
        thickness={4}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontSize="32px">{`${Math.round(value)}`}</Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressWithLabel
