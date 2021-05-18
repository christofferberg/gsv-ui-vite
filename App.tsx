import React from 'react'
import { Button } from './src/Button'

function App() {
  return (
    <>
      <div>
        <Button size="small">Hello world</Button>
        <Button size="medium">Hello world</Button>
        <Button size="large">Hello world</Button>
      </div>

      <div>
        <Button size="small" variant="secondary">
          Hello world
        </Button>
        <Button size="medium" variant="secondary">
          Hello world
        </Button>
        <Button size="large" variant="secondary">
          Hello world
        </Button>
      </div>
    </>
  )
}

export default App
