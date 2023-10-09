import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"

const ShareOnLinks = () => {
  const shareUrl = `https://meetrics.com/`

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
        <TwitterShareButton url={shareUrl} title="meetrics">
          <TwitterIcon fontSize="small" sx={{ color: "#4F4F4F" }} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedInIcon fontSize="small" sx={{ color: "#4F4F4F" }} />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} quote="meetrics" hashtag="meetrics">
          <FacebookOutlinedIcon fontSize="small" sx={{ color: "#4F4F4F" }} />
        </FacebookShareButton>
      </Box>
    </Stack>
  )
}

export default ShareOnLinks
