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
    palette: {
      primary: {
        main: "#1770E5",
        light: "#EBF3FF",
      },
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeLayout
