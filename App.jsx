import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)


  const value=useSelector((state)=>{
    return state.value
  })
  const dispatch=useDispatch();

  function addd(){
    dispatch({
      type:"increment"
    })
  }
  function min(){
    dispatch({
      type:"decrement"
    })
  }
  function clr(){
    dispatch({
      type:"clear"
    })
  }
  return (
    <>
   <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: 'white' }}
      >

        <div
          className="shadow-xl rounded-3xl p-10 w-[350px] flex flex-col items-center gap-8"
          style={{ backgroundColor: "#D9CFC7" }}
        >

          {/* Title */}
          <h1
            className="text-2xl font-extrabold tracking-wide"
            style={{ color: "#C9B59C" }}
          >
            Counter App
          </h1>

          {/* Display Box */}
          <div
            className="w-full py-6 text-center text-4xl font-bold rounded-xl shadow-md"
            style={{ backgroundColor: "#C9B59C", color: "white" }}
          >
            {value}
          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button
              onClick={addd}
              className="px-6 py-3 text-white font-semibold rounded-xl transition"
              style={{ backgroundColor: "#C9B59C" }}
            >
              Add
            </button>

            <button
              onClick={clr}
              className="px-6 py-3 font-semibold rounded-xl border-2 transition"
              style={{
                backgroundColor: "#D9CFC7",
                color: "#C9B59C",
                borderColor: "#C9B59C"
              }}
            >
              Clear
            </button>

            <button
              onClick={min}
              className="px-6 py-3 text-white font-semibold rounded-xl transition"
              style={{ backgroundColor: "#C9B59C" }}
            >
              Minus
            </button>

          </div>
        </div>

      </div>
        
    </>
  )
}

export default App
