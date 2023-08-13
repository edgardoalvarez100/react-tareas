import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Layout, Nopage } from './pages';
import { Signup } from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
