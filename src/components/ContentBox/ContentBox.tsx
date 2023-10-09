import React from "react"
import { Box } from "@mui/material"

interface Props {
  children: React.ReactNode
}

const ContentBox: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        border: "1px solid #D6D6D6",
        borderRadius: "4px",
        padding: "12px",
      }}
    >
      {children}
    </Box>
  )
}

export default ContentBox
