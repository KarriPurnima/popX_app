import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginScreen() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (!isValid) return
    // mock login — in a real app, call your auth API here
    navigate('/account-settings')
  }

  return (
    <div className="w-full max-w-[360px] min-h-[700px] bg-[#F7F7FC] border border-gray-200 px-6 py-8">
      <h1 className="text-xl font-bold text-gray-900 mb-1">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin}>
        <label className="block text-popxPurple text-xs font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-popxPurple"
        />

        <label className="block text-popxPurple text-xs font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-popxPurple"
        />

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            isValid
              ? 'bg-popxPurple text-white hover:bg-purple-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginScreen