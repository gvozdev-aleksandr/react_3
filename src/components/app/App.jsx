import { useState } from 'react'
import { GlobalStyle } from './styled'
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import PageWrapper from '@layout/PageWrapper/PageWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <span>count is {count}</span>
          <button onClick={() => setCount((count) => count - 1)}>-</button>          
        </div>        
      </PageWrapper>
    </>
  )
}

export default App
