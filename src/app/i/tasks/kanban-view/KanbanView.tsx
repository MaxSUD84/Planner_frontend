'use client'

import { DragDropContext } from "@hello-pangea/dnd"
import { COLUMNS } from "../colomns.data"
import { useTaskDnd } from "../hooks/useTaskDnd"
import { useTasks } from "../hooks/useTasks"


import { KanbanColumn } from "./KanbanColumn"
import  styles from './KanbanView.module.scss'

export function KanbanView() {
    const { items, setItems } = useTasks()

    // console.log(items)

    const { onDragEnd } = useTaskDnd()

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board}>
                {COLUMNS.map((column) => (
                    <KanbanColumn 
                        items={items}
                        key={column.value} 
                        label={column.label}
                        value={column.value} 
                        setItems={setItems}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}
