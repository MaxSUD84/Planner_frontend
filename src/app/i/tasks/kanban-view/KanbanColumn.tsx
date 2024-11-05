import type { ITaskResponce } from "@/types"
import type { Dispatch, SetStateAction } from "react"
import { Draggable, Droppable } from "@hello-pangea/dnd"

import styles from './KanbanView.module.scss'
import { KanbanCard } from "./KanbanCard"
import { FILTERS } from "../colomns.data"
import { filterTasks } from "../filter-tasks"
import { KanbanAddCardInput } from "./KanbanAddCardInput"


interface IKanbanColumn {
    value: string
    label: string
    items: ITaskResponce[] | undefined
    setItems: Dispatch<SetStateAction<ITaskResponce[] | undefined>>
}

export function KanbanColumn({
    value,
    label,
    items,
    setItems
}: IKanbanColumn) {
    return (
        <Droppable droppableId={value}>
            {provided => (
                <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className={styles.column}>
                        <div className={styles.columnHeading}>{label}</div>
                        {filterTasks(items, value)?.map((item, index) => {
                            return (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                >
                                    {provided => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <KanbanCard
                                                key={item.id}
                                                item={item}
                                                setItems={setItems}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            )}
                        )}
                        {provided.placeholder}
                    
                        {value !== 'completed' && !items?.some(item => !item.id) && (
                            <KanbanAddCardInput
                                setItems={setItems}
                                filterDate={FILTERS[value] ? FILTERS[value] : undefined}
                            />
                        )}
                    </div>
                </div>
            )}
        </Droppable>
    )
}
