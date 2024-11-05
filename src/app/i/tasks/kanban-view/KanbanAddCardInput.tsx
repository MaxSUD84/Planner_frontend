import type { Dispatch, SetStateAction } from "react"
import type { ITaskResponce } from "@/types"

interface IKanbanAddCardInput {
    filterDate?: string
    setItems: Dispatch<SetStateAction<ITaskResponce[] | undefined>>
}

export function KanbanAddCardInput({ setItems, filterDate }: IKanbanAddCardInput) {
    const addCard = () => {
        setItems(prev => {
            if(!prev) return

            return [
                ...prev, 
                {
                    id: '',
                    name: '',
                    // priority: 'low',
                    isCompleted: false,
                    createdAt: filterDate
                }
            ]
        })
    }
    return (
        <div className='mt-5'>
            <button 
                onClick={addCard}
                className='italic opacity-40 text-sm'
            >
                Добавить задачу ...
            </button>
        </div>
    )
}
