
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Search from './Pages/Search'
import Sorting from './Pages/Sorting'
import Pagination from './Pages/Pagination'
import Pagination1 from './Pages/Pagination1'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='sorting' element={<Sorting/>}/>
      <Route path='pagination' element={<Pagination/>}/>
      <Route path='pagination1' element={<Pagination1/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
