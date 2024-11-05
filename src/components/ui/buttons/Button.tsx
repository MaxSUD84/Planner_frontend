import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...rest }: PropsWithChildren<TypeButton>) {
    return (
            <button
                className={cn(
                    `linear rounded-lg bg-transparent border border-primary px-7 py-2
                    text-base font-medium text-white transition hover:bg-primary
                    active:bg-indigo-700`,
                    className
                )}
                {...rest}
            >
                {children}
            </button> 
    )}