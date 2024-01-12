import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src="https://wallpaperaccess.com/full/2529602.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Supuesta Leon Elizabeth </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          DISPOSITIVO HACKEADO CORRECTAMENTE
        </button>
        <p>
          Un gusto soy ander condinador de asuntos de civerseguridad de Facebook, tu dispositivo a sido hackeado por flagio en pocos mitutos saldra a la luz toda tu info personal creo que mereses una lección por lo mal@ que eres por favor disculpa pero es mi trabajo.
        </p>
      </div>
      
    </>
  )
}

export default App
