import OTPForm from "@/app/(components)/OTPForm"
import Image from 'next/image'

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-zinc-900">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Enter Verification Code
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-zinc-400">
            Please enter the code sent to your email address.
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
        <OTPForm />
      </div>
    </div>
  )
}
