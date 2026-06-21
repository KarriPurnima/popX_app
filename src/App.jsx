import { Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import AccountSettings from './components/AccountSettings'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </div>
  )
}

export default App