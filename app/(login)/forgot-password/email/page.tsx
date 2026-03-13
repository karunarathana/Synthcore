import EmailForm from '@/app/(components)/EmailForm'
import Image from 'next/image'

export default function SendOtp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-zinc-900">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-zinc-400">
            Enter your email to receive a verification code.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={100}
              className="dark:invert"
            />
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  )
}
