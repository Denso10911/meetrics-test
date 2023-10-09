import React from "react"
import { Box, CircularProgress, circularProgressClasses, Typography } from "@mui/material"
import { useCountUp } from "use-count-up"

interface Props {
  value: number
}

const CircularProgressWithLabel: React.FC<Props> = ({ value }) => {
  const { value: loadedValue } = useCountUp({
    isCounting: true,
    duration: 0.5,
    start: 0,
    end: value,
  })

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#F3F3F3",
        }}
        size={100}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={Number(loadedValue)}
        sx={{
          color: "primary",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
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
        <Typography fontSize="32px">{`${Math.round(loadedValue)}`}</Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressWithLabel
