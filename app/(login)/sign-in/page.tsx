import LoginForm from '@/app/(components)/LoginForm';
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className=" w-full flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-[40%] border max-w-md border-amber-300 space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-zinc-900">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <LoginForm />
        </div>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
