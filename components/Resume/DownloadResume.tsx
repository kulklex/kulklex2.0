import React from 'react'

export default function DownloadResume() {
    const handleResume = () => {
        const resumeUrl = "/Resume.pdf"
        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = "Hassan_Resume.pdf" // Download the file instead of opening it in the browser.

        document.body.appendChild(link); // Adds the link to the document body

        link.click();

        document.body.removeChild(link); // Removes the link from the DOM to clean up

    }
  return (
    <button onClick={handleResume}>
        <b>Download Resume</b>
    </button>
  )
}

