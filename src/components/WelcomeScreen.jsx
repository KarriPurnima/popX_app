import { useNavigate } from 'react-router-dom'

function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-[360px] min-h-[700px] bg-[#F7F7FC] border border-gray-200 flex flex-col justify-end px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome to PopX
      </h1>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        onClick={() => navigate('/signup')}
        className="w-full bg-popxPurple text-white font-semibold py-3 rounded-lg mb-3 hover:bg-purple-800 transition-colors"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate('/login')}
        className="w-full bg-popxLight text-gray-900 font-semibold py-3 rounded-lg hover:bg-purple-200 transition-colors"
      >
        Already Registered? Login
      </button>
    </div>
  )
}

export default WelcomeScreen