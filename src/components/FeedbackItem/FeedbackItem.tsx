import React, { useState } from "react"
import { IconButton, Link, Stack, Typography } from "@mui/material"
import ContentBox from "../ContentBox"
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined"
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDown from "@mui/icons-material/ThumbDown"

interface Props {
  feedback: unknown
}

const FeedbackItem: React.FC<Props> = ({ feedback }) => {
  const [selectedFeedback, setSelectedFeedback] = useState("")

  const handleClick = (value: string) => {
    if (!selectedFeedback || selectedFeedback !== value) {
      setSelectedFeedback(value)
    } else {
      setSelectedFeedback("")
    }
  }

  console.log(selectedFeedback, "selectedFeedback")
  return (
    <ContentBox>
      <Stack direction="row" gap="30px">
        <Stack>
          <Typography fontWeight={500}>{feedback.title}</Typography>
          <Typography
            fontSize={14}
            color="#4F4F4F"
          >{`${feedback.date} ${feedback.time}`}</Typography>
          <Typography fontSize={14} color="#4F4F4F" mt="8px">
            {feedback.desc}
          </Typography>
        </Stack>
        <Stack width={100} flexShrink={0} alignItems="center">
          <Typography fontSize={14} fontWeight={500}>
            Objective met?
          </Typography>
          <Stack mb={1} direction="row" gap="5px">
            <IconButton aria-label="positive" onClick={() => handleClick("positive")}>
              {selectedFeedback === "positive" ? (
                <ThumbUpIcon fontSize="small" color="primary" />
              ) : (
                <ThumbUpAltOutlinedIcon fontSize="small" color="primary" />
              )}
            </IconButton>
            <IconButton aria-label="negative" onClick={() => handleClick("negative")}>
              {selectedFeedback === "negative" ? (
                <ThumbDown fontSize="small" color="primary" />
              ) : (
                <ThumbDownOutlinedIcon fontSize="small" color="primary" />
              )}
            </IconButton>
          </Stack>

          <Link href="#" underline="hover" fontSize={14}>
            Didn’t Attend
          </Link>
        </Stack>
      </Stack>
    </ContentBox>
  )
}

export default FeedbackItem
