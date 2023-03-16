import { MainRoute } from './routes'
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/*" element={<MainRoute />} />
    </Routes>
  )
}

export default App
