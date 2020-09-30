import React from 'react';
import ReactDOM from 'react-dom'

import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header background="red" />
    <h1>Hello from second app</h1>
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));