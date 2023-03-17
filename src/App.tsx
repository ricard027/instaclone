import './App.css'

// components
import LoginPage from './pages/login/login.page'
import HomePage from './pages/home/home.page'

// utilities

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/sign-up/signup.page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
