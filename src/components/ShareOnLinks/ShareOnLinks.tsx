import React from "react"
import { Box, Stack, Typography, IconButton } from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"

const ShareOnLinks = () => {
  const links = [
    { id: 1, icon: <TwitterIcon fontSize="small" sx={{ color: "#4F4F4F" }} /> },
    { id: 2, icon: <LinkedInIcon fontSize="small" sx={{ color: "#4F4F4F" }} /> },
    { id: 3, icon: <FacebookOutlinedIcon fontSize="small" sx={{ color: "#4F4F4F" }} /> },
  ]

  const handleLinkClick = () => {
    console.log("share with react-share")
  }
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        gap: "12px",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "11px",
          color: "#636363",
        }}
      >
        Share on
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        {links.map(el => (
          <IconButton aria-label="negative" onClick={handleLinkClick} sx={{ p: 0 }}>
            {el.icon}
          </IconButton>
        ))}
      </Box>
    </Stack>
  )
}

export default ShareOnLinks
