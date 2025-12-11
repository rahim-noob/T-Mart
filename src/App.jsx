import Home from './Pages/Home'
import Shop from './Pages/Shop'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Components/Layout'
import Contact from './Pages/Contact'
import ProductDeatails from './Pages/ProductDeatails'

function App() {
  

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop/:id' element={<ProductDeatails/>}/>
            
          </Route>

        </Routes>
      </BrowserRouter>
    

  )
}

export default App
