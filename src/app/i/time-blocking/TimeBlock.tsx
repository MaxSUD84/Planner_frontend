import type { ITimeBlockResponse, TypeTimeBlockFormState } from "@/types";
import { useTimeBlockSortable } from "./hooks/useTimeBlockSortable";
import { useFormContext } from "react-hook-form";
import { useDeletetimeBlock } from "./hooks/useDeletetimeBlock";
import { Edit, GripVertical, Loader, Trash } from "lucide-react";

import styles from './TimeBlocking.module.scss'

export function TimeBlock({ item }: { item: ITimeBlockResponse }) {
    const { attributes, listeners, setNodeRef, style, isDragging } = useTimeBlockSortable(item.id);

    const { reset } = useFormContext<TypeTimeBlockFormState>()
    const { deleteTimeBlock, isDeletePending } = useDeletetimeBlock(item.id)


    return (
        <div 
            ref={setNodeRef}
            style={style}
        >
            <div
                className={styles.block}
                style={{
                    backgroundColor: item.color || "lightgray",
                    height: `${item.duration}px`
                }}
            >
                <button
                    {...attributes}
                    {...listeners}
                    aria-describedby="time-block"
                >
                    <GripVertical className={styles.grip} />
                </button>
                <div className="text-black">
                    {item.name}{'   '}
                    <i className="text-xs opacity-50">({item.duration} min.)</i>
                </div>
                <div className={styles.actions}>
                    <button
                        className="opacity-50 transition-opacity hover:opacity-100 mr-2"
                        onClick={() => {
                            reset({
                                id: item.id,
                                name: item.name,
                                duration: item.duration,
                                color: item.color,
                                order: item.order
                            })
                        }}
                    >
                        <Edit size={16} />
                    </button>  
                    <button
                        className="opacity-50 transition-opacity hover:opacity-100"
                        onClick={() => {
                            deleteTimeBlock()
                        }}
                        disabled={isDeletePending}
                    >
                        {isDeletePending ? <Loader size={16} /> : <Trash size={16} />}
                    </button>  
                </div>
            </div>
        </div>
    )
}
