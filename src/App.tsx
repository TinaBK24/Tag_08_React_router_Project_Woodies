import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import RootLayout from './RootLayout/RootLayout'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Jenson from './pages/jenson/Jenson'
import NotFound from './pages/notFound/NotFound'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/jenson' element={<Jenson />} />
        <Route path='*' element={<NotFound />} />
      </Route >
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
