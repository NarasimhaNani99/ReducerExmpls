import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const ReducerDemo = lazy(()=> import('./components/ReducerDemo'))
const FetchingUseReducer = lazy(()=>import ('./components/FetchingUseReducer'))

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<p>Please Wait...</p>} >
        <div className='row flex '>
          <h1>Use Reducer</h1>
          <div className='col-md-12 mb-5'>
            <ReducerDemo />
          </div>
          <div className='col-md-12 mb-5 table-responsive'>
            <FetchingUseReducer/>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
