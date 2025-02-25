import { Route, Routes } from "react-router-dom"
import AddPage from './pages/AddPage/AddPage'
import HomePage from './pages/HomePage/HomePage'
import LogPage from './pages/LogPage/LogPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/add_task" element={<AddPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/activity_log" element={<LogPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;