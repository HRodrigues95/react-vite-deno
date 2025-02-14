import { BrowserRouter, Routes, Route, Navigate } from 'npm:react-router-dom'
import DefaultLayout from "../layouts/defaultLayout.tsx";
import Home from "../pages/Home.tsx";
import Page1 from "../pages/Page1/index.tsx";
import Page2 from "../pages/Page2/index.tsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>

        <Route path="*" element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
