import { Stack } from "@mui/material"
import "./App.css"
import { Footer, Logo, MeetricsTabs } from "./components"
import ThemeLayout from "./layouts/ThemeLayout"

const App = () => {
  return (
    <ThemeLayout>
      <Stack sx={{ backgroundColor: "#ffffff", width: 350, height: 1000 }}>
        <Logo />
        <MeetricsTabs />
        <Footer />
      </Stack>
    </ThemeLayout>
  )
}

export default App
