import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupScreen() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // mock signup — in a real app, call your signup API here
    navigate('/account-settings')
  }

  return (
    <div className="w-full max-w-[360px] min-h-[700px] bg-[#F7F7FC] border border-gray-200 px-6 py-8 flex flex-col">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="space-y-4 flex-1">
          <Field
            label="Full Name"
            required
            value={form.fullName}
            onChange={handleChange('fullName')}
            placeholder="Marry Doe"
          />
          <Field
            label="Phone number"
            required
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="Marry Doe"
          />
          <Field
            label="Email address"
            required
            value={form.email}
            onChange={handleChange('email')}
            placeholder="Marry Doe"
          />
          <Field
            label="Password"
            required
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            placeholder="Marry Doe"
          />
          <Field
            label="Company name"
            value={form.company}
            onChange={handleChange('company')}
            placeholder="Marry Doe"
          />

          <div>
            <p className="text-sm text-gray-800 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange('isAgency')}
                  className="accent-popxPurple w-4 h-4"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange('isAgency')}
                  className="accent-popxPurple w-4 h-4"
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-popxPurple text-white font-semibold py-3 rounded-lg mt-6 hover:bg-purple-800 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

function Field({ label, required, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-popxPurple text-xs font-medium mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-popxPurple"
      />
    </div>
  )
}

export default SignupScreen