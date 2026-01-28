import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Classes from "./pages/Classes"

import {Route, Routes} from 'react-router-dom'
function App() {

  return (
     <>
    <Routes>
      <Route path="/"element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="courses" element={<Classes/>}/>
      </Route>

    </Routes>
     </>
  )
}

export default App
