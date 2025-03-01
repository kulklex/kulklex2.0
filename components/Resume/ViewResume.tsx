import React from 'react'

export default function ViewResume() {
    const handleResume = () => {
        const resumeUrl = "/Resume.pdf"
        window.open(resumeUrl, "_blank")
    }
  return (
    <button onClick={handleResume}>Click here to open resume</button>
  )
}
