import React from 'react'
import { Button } from '@mui/material'

const MainContent = () => {
  return (
    <div>
      <div id="main-submit">
        <h1>Our App</h1>
        <Button variant="text" color='primary' href="/submit">Submit an item for search</Button>
      </div>
    </div>
  )
}

export default MainContent
