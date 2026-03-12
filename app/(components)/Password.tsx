'use client'
interface EmailProps {
    value: string;
    onChange: (value: string) => void;
}
function Password({ value, onChange }: EmailProps) {
    return (
        <div><label htmlFor="password" className="sr-only">
            Password
        </label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white sm:text-sm"
                placeholder="Enter Password"
            />
        </div>
    )
}

export default Password