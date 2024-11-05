import { X } from 'lucide-react'
import cn from 'clsx'
import { Badge } from '@/components/ui/Badge'
import { useOutside } from '@/hooks/useOutside'

export interface IOption {
    label: string
    value: string
}

interface ISingleSelect {
    data: IOption[]
    value: string
    onChange: (value: string) => void
    isColorSelect? : boolean
}



export function SingleSelect({
    data,
    value,
    onChange,
    isColorSelect
}: ISingleSelect) {

    const { ref, setIsShow, isShow } = useOutside(false)
    const getValue = () => data.find(item => item.value === value)?.value
        
    return (
        <div
            className={cn('relative min-w-36', {
                'w-36': !isColorSelect
            })}
            ref={ref}
        >
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setIsShow(!isShow) 
                }}
            >   
                {getValue() ? (
                    <Badge 
                        variant={value}
                        className='capitalize'
                        style={isColorSelect ? {backgroundColor: value} : {}}
                    >
                        {getValue()}
                    </Badge>
                ) : (
                    <Badge 
                        className='capitalize'
                        style={isColorSelect ? {backgroundColor: value} : {}}
                    >
                        Выберите цвет
                    </Badge>
                )}
            </button>
            {value && (
                <button
                    onClick={(e) => {
                        e.preventDefault
                        onChange('')}
                    }
                    className='absolute top-0 right-0 opacity-30 hover:opacity-100 transition-opacity duration-300'
                >
                    <X size={18}  />
                </button>
            )}
            {isShow && (
                <div
                    className={cn(
                        'absolute top-full z-10 mt-2 w-full rounded-md bg-sidebar shadow-md',)}
                    style={{
                        top: 'calc(100% + .5rem)'
                    }}
                >
                    {data.map(item => (
                        <button
                            key={item.value}
                            onClick={(e) => {
                                e.preventDefault
                                onChange(item.value)
                                setIsShow(false)}
                            }
                            className='block mb-4 last:mb-0 capitalize rounded-lg'
                            style={isColorSelect ? {backgroundColor: item.value} : {}}
                        >
                            <Badge variant={item.value}>{item.label}</Badge>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
