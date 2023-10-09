import React from "react"
import { Box, Stack, Typography } from "@mui/material"

interface Props {
  isActive: boolean
  label: string
  count: number
}

const CustomTabLabel: React.FC<Props> = ({ isActive, label, count }) => {
  return (
    <Stack direction="row" px="5px" alignItems="center" gap="2px">
      <Typography
        fontSize={14}
        sx={{
          fontWeight: isActive ? 600 : 500,
          color: isActive ? "#1770E5" : "#636363",
        }}
      >
        {label}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={14}
        height={14}
        fontSize={12}
        borderRadius="2px"
        sx={{
          backgroundColor: "#EBF3FF",
        }}
      >
        {count}
      </Box>
    </Stack>
  )
}

export default CustomTabLabel
