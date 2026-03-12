'use client'

interface EmailAddressProps {
    value: string;
    onChange: (value: string) => void;
}

function Email_address({ value, onChange }: EmailAddressProps) {
    return (
        <div>
            <label htmlFor="email-address" className="sr-only">
                Enter Email Address
            </label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white sm:text-sm"
                placeholder="Enter Email address"
            />
        </div>
    )
}

export default Email_address    