import { type ChangeEventHandler, forwardRef } from "react"

interface InputFieldProps {
    id: string
    label: string
    extra?: string
    type?: string
    variant?: string
    placeholder: string
    state?: 'error' | 'success'
    disabled?: boolean
    isNumber?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    (
        {
            id,
            label,
            extra,
            type,
            placeholder,
            state,
            disabled,
            isNumber,
            ...rest
        },
        ref
    ) => (
            <div className={`${extra}`}>
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-cyan-700 ml-1.5"
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    disabled={disabled}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`
                        mt-2 flex w-full items-center justify-center rounded-lg 
                        border border-gray-300 bg-white/0 px-3 text-base outline-none
                        placeholder:text-white/30 placeholder:font-normal duration-500
                        tranition-colors focus:border-primary ${
                            disabled
                                ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
                                : state === 'error' 
                                ? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:!placeholder:text-red-400' 
                                : state === 'success' 
                                ? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:!placeholder:text-green-400' 
                                : ''
                    }`}
                    onKeyDown={(e) => {
                        if (isNumber && 
                            !/[0-9]/.test(e.key) &&
                            e.key !== 'Backspace' &&
                            e.key !== 'Tab' &&
                            e.key !== 'Enter' &&
                            e.key !== 'ArrowRight' &&
                            e.key !== 'ArrowLeft'
                        ) {
                            e.preventDefault()
                        }
                    }}
                    {...rest}
                />
            </div>
    )
)

InputField.displayName = 'field'