import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../pages/Home'
import NotFound from '../components/NotFound'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
