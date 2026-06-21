import { Pencil, User } from 'lucide-react'

function AccountSettings() {
  return (
    <div className="w-full max-w-[360px] min-h-[700px] bg-[#F7F7FC] border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-200">
        <h1 className="text-base font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>

      <div className="px-5 py-5 border-b border-dashed border-gray-300">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-7 h-7 text-gray-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-popxPurple rounded-full p-1 border-2 border-white">
              <Pencil className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Marry Doe</p>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default AccountSettings