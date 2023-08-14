import { useEffect, useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Layout, Nopage, Home, Signup, Tarea } from './pages';



function App() {
  const [logueado, setLogueado] = useState(null)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/tareas" element={<Tarea />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
