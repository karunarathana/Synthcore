import Email_address from "@/app/(components)/Email_address";
import Password from "@/app/(components)/Password";
import LoginService from "@/app/(services)/AuthanticationService";
import Link from "next/link";
import { useState } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState(""); // state for email
    const [password, setPassword] = useState(""); // state for password

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        LoginService();
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-zinc-900">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <Email_address value={email} onChange={setEmail} />
                        </div>
                        <div className="mt-2">
                            <Password value={password} onChange={setPassword} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900 dark:text-zinc-300"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={submitHandler}
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
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
