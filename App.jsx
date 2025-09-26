import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navar'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement , increment ,multyplyBy2 } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
     <button onClick={() => dispatch(decrement())}>-</button>
     <div>Currently Count is {count}</div>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={()=>{dispatch(multyplyBy2())}}>*</button>


    </>
  )
}

export default App
