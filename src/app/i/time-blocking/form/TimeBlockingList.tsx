import Loader from "@/components/ui/Loader"
import { useTimeBlockDnd } from "../hooks/useTimeBlockDnd"
import { useTimeBlocks } from "../hooks/useTimeBlocks"
import { calcHoursLeft } from "../calc-hours-left"

import styles from '../TimeBlocking.module.scss'
import { closestCenter, DndContext } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { TimeBlock } from "../TimeBlock"

export function TimeBlockingList() {
    const { items, setItems, isLoading } = useTimeBlocks()
    const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

    if(isLoading) return <Loader />

    const { hoursLeft } = calcHoursLeft(items)

    return (
        <div>
            <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd} 
            >
                <div className={styles.list}>
                    <SortableContext
                        items={items || []}
                        strategy={verticalListSortingStrategy}
                    >
                        {items?.length
                            ? items.map((item) => (
                                <TimeBlock
                                    key={item.id}
                                    item={item}
                                />
                            )) : (
                                <div className={styles.empty}>
                                    <p>Нет временных блоков</p>
                                </div>
                            )}
                    </SortableContext>
                </div>
            </DndContext>
            <div>
                { hoursLeft > 0 
                    ? <p>{hoursLeft} часов осталось на сон</p>
                    : <p>На сон часов не осталось</p>
                }
            </div>
        </div>
    )
}
