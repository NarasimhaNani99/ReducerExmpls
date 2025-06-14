import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerDemo from './components/ReducerDemo'
import FetchingUseReducer from './components/FetchingUseReducer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='row flex'>
        <h1>Use Reducer</h1>
        <div className='col-4 col-md-12 mb-5'>
          <ReducerDemo />
        </div>
        <div className='col-8 col-md-12 mb-5'>
          <FetchingUseReducer/>
        </div>
      </div>
    </>
  )
}

export default App
