import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import JuJingyiPage from './pages/JuJingyiPage'
import ZhangYunlongPage from './pages/ZhangYunlongPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ju-jingyi" element={<JuJingyiPage />} />
      <Route path="/zhang-yunlong" element={<ZhangYunlongPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
