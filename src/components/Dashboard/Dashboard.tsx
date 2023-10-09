import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import ContentBox from "../ContentBox"
import ShareOnLinks from "../ShareOnLinks/ShareOnLinks.tsx"
import FeedbackList from "../FeedbackList"
import { feedbacksMock, statMock } from "../../mockData"
import CircularProgressWithLabel from "../CircularProgressWithLabel"

interface Props {
  feedbacks: unknown[]
}

const Dashboard: React.FC<Props> = ({ feedbacks }) => {
  const statList = [
    { id: 1, value: statMock.total, label: "of meetings eliminated" },
    { id: 2, value: statMock.improved, label: "of meetings improved" },
    { id: 3, value: statMock.eliminated, label: "of meetings eliminated" },
  ]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "18px",
        gap: "16px",
      }}
    >
      <ContentBox>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            gap: "28px",
            padding: "4px 11px 4px 33px",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              flexShrink: 0,
            }}
          >
            <CircularProgressWithLabel value={statMock.score} />
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            Overall Meetrics Score 🏆
          </Typography>
        </Stack>
      </ContentBox>
      <ContentBox>
        <Stack direction="row">
          {statList.map(el => (
            <Box
              key={el.id}
              sx={{
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              {el.id <= 2 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "5px",
                    height: 65,
                    width: 1,
                    backgroundColor: "#D6D6D6",
                  }}
                />
              )}
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#0D1929",
                }}
              >
                {el.value} hrs
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#636363",
                }}
              >
                {el.label}
              </Typography>
            </Box>
          ))}
        </Stack>
        <ShareOnLinks />
      </ContentBox>
      <FeedbackList feedbacks={feedbacks} />
    </Box>
  )
}

export default Dashboard
