import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { use, useState } from 'react'
import { DayPicker, type  OnSelectHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOutside'

import './DatePicker.scss'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
    className?: string
    position?: 'left' | 'right'
    value: string
    onChange: (value: string) => void
}

export function DatePicker({
    className,
    position = 'right',
    value,
    onChange    
}: IDatePicker) {
    const [selected, setSelected] = useState<Date>();
    const { ref, setIsShow, isShow } = useOutside(false)


    const handleDaySelect: OnSelectHandler<Date> = (date, triggerDate, {},event) => {
        // const ISOdate = date?.toISOString()
        const ISOdate = date?.toISOString()
        const newDate = dayjs(ISOdate)?.format('YYYY-MM-DD') || ''
        // console.log(ISOdate , newDate)    

        setSelected(date)
        if(newDate) {
            onChange(newDate)
            setIsShow(false)
        }else{
            onChange('')
        }
    }

    return (
        <div
            className={'relative'}
            ref={ref}
        >
            <button onClick={() => setIsShow(!isShow)}>
                {value ? dayjs(value).format('DD.MM.YYYY') : 'Выберите дату'}
            </button>
            {value && (
                <button
                    className='opacity-20 hover:opacity-100 transition-opacity duration-300'
                    onClick={() => onChange('')}
                >
                    <X size={18} color='gray' />
                </button>
            )}

            {isShow && (      
                <div
                    className={cn(
                        'absolute p-2.5 slide bg-sidebar z-10 shadow rounded-lg',
                        position === 'left' ? '-left-4' : '-right-4'
                    )}
                    style={{ top: 'calc(100% + .7rem)' }}
                >
                    <DayPicker  
                        mode='single'
                        timeZone="Europe/Moscow"
                        startMonth={new Date(2024,0)}
                        endMonth={new Date(2054,0)}
                        defaultMonth={new Date(2024, dayjs().month())}
                        selected={selected}
                        onSelect={handleDaySelect}
                        weekStartsOn={1}
                        required={true}
                        // formatters={{ formatCaption }}
                    />   
                </div>  
            )}
        </div>
    )
}