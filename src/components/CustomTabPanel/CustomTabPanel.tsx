import React from "react"

interface Props {
  children?: React.ReactNode
  index: number
  value: number
}

const CustomTabPanel: React.FC<Props> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

export default CustomTabPanel
