import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import FeedbackItem from "../FeedbackItem"

interface Props {
  feedbacks: unknown[]
}

const FeedbackList: React.FC<Props> = ({ feedbacks = mockFeedbacks }) => {
  return (
    <Box>
      <Stack direction="row" gap="2px" alignItems="center" mb="4px">
        <Typography fontSize="22px">Meeting Feedback</Typography>
        <Typography>🤔</Typography>
        <Box
          width={24}
          height={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
          color="#1770E5"
          sx={{
            backgroundColor: "#EBF3FF",
          }}
        >
          {feedbacks?.length || 2}
        </Box>
      </Stack>
      <Stack gap="12px">
        {feedbacks.map(el => (
          <FeedbackItem key={el.id} feedback={el} />
        ))}
      </Stack>
    </Box>
  )
}

export default FeedbackList
