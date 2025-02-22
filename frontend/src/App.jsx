import { Route, Routes } from "react-router-dom"
import './App.css'
import AddPage from './pages/AddPage/AddPage'
import HomePage from './pages/HomePage/HomePage'
import LogPage from './pages/LogPage/LogPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/add_task" element={<AddPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/activity_log" element={<LogPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;