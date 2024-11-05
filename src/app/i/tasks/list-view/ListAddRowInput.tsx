import type { Dispatch, SetStateAction } from "react"
import type { ITaskResponce } from "@/types"

import styles from './ListView.module.scss' 

interface IListAddRowInput {
    filterDate?: string
    setItems: Dispatch<SetStateAction<ITaskResponce[] | undefined>>
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
    const addRow = () => {
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
        <div className={styles.addRow}>
            <button 
                onClick={addRow}
                className='italic opacity-40 text-sm'
            >
                Добавить задачу ...
            </button>
        </div>
    )
}
