import { Stack } from "@mui/material"
import "./App.css"
import { Footer, Header, MeetricsTabs } from "./components"
import ThemeLayout from "./layouts/ThemeLayout"

const App = () => {
  return (
    <ThemeLayout>
      <Stack sx={{ backgroundColor: "#ffffff", width: 350, height: 1000 }}>
        <Header />
        <MeetricsTabs />
        <Footer />
      </Stack>
    </ThemeLayout>
  )
}

export default App
