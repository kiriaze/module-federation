import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const Header = React.lazy(() => import('app2/Header'))
const Counter = React.lazy(() => import('app2/Counter'))

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <React.Suspense fallback='Loading Header...'>
        <Header />
      </React.Suspense>
      <h1>Hello from app 1</h1>
      <React.Suspense fallback='Loading Counter...'>
        <Counter
          count={count}
          onIncrement={() => setCount(count+1)}
          onDecrement={() => setCount(count-1)}
        />
      </React.Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));