import React from "react"
import { createTheme, ThemeProvider } from "@mui/material"

interface Props {
  children: React.ReactNode
}

const ThemeLayout: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeLayout
