'use client'

import { DragDropContext } from "@hello-pangea/dnd"
import { COLUMNS } from "../colomns.data"
import { useTaskDnd } from "../hooks/useTaskDnd"
import { useTasks } from "../hooks/useTasks"

import { ListRowParent } from "./ListRowParent"
import  styles from './ListView.module.scss'

export function ListView() {
    const { items, setItems } = useTasks()

    // console.log(items)

    const { onDragEnd } = useTaskDnd()

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.table}>
                <div className={styles.header}>
                    <div>Наименование</div>
                    <div>Срок завершение</div>
                    <div>Приоритет</div>
                    <div></div>
                </div>

                <div className={styles.parentsWrapper}>
                    {COLUMNS.map((column) => (
                        <ListRowParent 
                            items={items}
                            key={column.value} 
                            label={column.label}
                            value={column.value} 
                            setItems={setItems}
                        />
                    ))}
                </div>
            </div>
        </DragDropContext>
    )
}
