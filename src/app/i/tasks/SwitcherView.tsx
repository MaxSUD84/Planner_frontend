'use client'

import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import type { TypeView } from './TasksView'

interface ISwitcherView {
    type: TypeView
    setType: (type: TypeView) => void
}

export function SwitcherView({ type, setType }: ISwitcherView) {
    return (
        <div className='flex items-center gap-4 mb-5'>
            <button
                className={cn('flex items-center gap-1', {
                    'opacity-50': type === 'kanban'
                })}
                onClick={() => setType('list')}
            >
                <ListTodo
                    size={20}
                    className={cn('text-violet-500', {
                        'text-violet-500': type === 'list'
                    })}
                />
                <span>Список</span>
            </button>
            <button
                className={cn('flex items-center gap-1', {
                    'opacity-50': type === 'list'
                })}
                onClick={() => setType('kanban')}
            >
                <Kanban
                    size={20}
                    className={cn('text-violet-500', {
                        'text-violet-500': type === 'kanban'
                    })}
                />
                <span>Плитка</span>
            </button>
        </div>
    )
}
