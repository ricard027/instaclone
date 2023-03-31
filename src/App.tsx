// Styles
import './App.css'
// Pages
import SignUpPage from './pages/sign-up/signup.page'
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
// utilities
import { onAuthStateChanged } from 'firebase/auth'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.config'

function App() {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

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
