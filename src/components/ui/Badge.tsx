import type { CSSProperties, PropsWithChildren} from 'react'
import { tv } from 'tailwind-variants'

interface IBadge {
    className?: string
    variant?: string
    style?: CSSProperties
}

const badge = tv({
    base: 'rounded-full w-max px-2 py-1 text-xs font-small text-white',
    variants: {
        backgroundColor: {
            gray: 'bg-gray-500/20',
            high: 'bg-red-400/60',
            medium: 'bg-yellow-400/70',
            low: 'bg-blue-400/70',
        }
    },
    defaultVariants: {
        backgroundColor: 'gray',
    }
})

export function Badge({ className, variant, style, children }: PropsWithChildren<IBadge>) {
  return (
    <span 
        className={badge({ 
            backgroundColor: variant as 'gray' | 'high' | 'medium' | 'low',
            className
        })} 
        style={style}
    >
        {children}
    </span>
  )
}