import type { ITaskResponce } from "@/types"
import type { Dispatch, SetStateAction } from "react"
import { Draggable, Droppable, DroppableProvided, DroppableStateSnapshot } from "@hello-pangea/dnd"

import styles from './ListView.module.scss'
import { ListRow } from "./ListRow"
import { FILTERS } from "../colomns.data"
import { filterTasks } from "../filter-tasks"
import { ListAddRowInput } from "./ListAddRowInput"

interface IListRowParent {
    value: string
    label: string
    items: ITaskResponce[] | undefined
    setItems: Dispatch<SetStateAction<ITaskResponce[] | undefined>>
}

export function ListRowParent({
    value,
    label,
    items,
    setItems
}: IListRowParent) {
    return (
        <Droppable 
            droppableId={value} 
        >
            {provided => (
                <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className={styles.colHeading}>
                        <div className="w-full">{label}</div>
                    </div>

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
                                        <ListRow
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
                        <ListAddRowInput
                            setItems={setItems}
                            filterDate={FILTERS[value] ? FILTERS[value] : undefined}
                        />
                    )}
                </div>
            )}
        </Droppable>
    )
}
