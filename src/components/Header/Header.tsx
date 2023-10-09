import { Avatar, Stack } from "@mui/material"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <Stack
      sx={{
        padding: "16px",
      }}
    >
      <Avatar
        src={logo}
        alt="Meetrics logo"
        variant="square"
        sx={{
          width: 185,
          height: 32,
        }}
      />
    </Stack>
  )
}

export default Header
