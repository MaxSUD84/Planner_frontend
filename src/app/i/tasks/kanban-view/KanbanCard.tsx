import cn from "clsx"
import { GripVertical, Loader, Trash } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import { Controller, useForm } from "react-hook-form"
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker"
import { SingleSelect } from "@/components/ui/task-edit/SingleSelect"
import { TransparentField } from "@/components/ui/fields/TransparentField"
import type { ITaskResponce, TypeTaskFormState } from "@/types"

import { useTaskDebounce } from "../hooks/useTaskDebounce"
import useDeleteTask from "../hooks/useDeleteTask"
import styles from './KanbanView.module.scss'

interface IKanbanCard {
    item: ITaskResponce
    setItems: Dispatch<SetStateAction<ITaskResponce[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
    const { register, control, watch } = useForm<TypeTaskFormState>({
        defaultValues: {
            name: item.name,
            isCompleted: item.isCompleted,
            createdAt: item.createdAt,
            priority: item.priority
        }
    })
       
    useTaskDebounce({ watch, itemId: item.id });

    const { deleteTask, isDeletePending } = useDeleteTask()

    return (
        <div
            className={cn(
                styles.card,
                {
                    [styles.completed]: watch("isCompleted")
                },
                'animation-opacity'
            )}
        >
            <div className={styles.cardHeader}>
                <button aria-describedby="todo-item">
                    <GripVertical className={styles.grip} />
                </button>
                <Controller
                    control={control}
                    name={"isCompleted"}
                    render={({ field: { value, onChange, ...field} }) => (
                        <input
                            {...field}
                            type="checkbox"
                            className={styles.checkbox || "p-1 m-1"}
                            checked={value}
                            onChange={onChange}
                        />
                    )}
                />

                <TransparentField {...register("name")} />
            </div>

            <div className={styles.cardBody}>
                <Controller
                    control={control}
                    name={"createdAt"}
                    render={({ field: { value, onChange, ...field} }) => (
                        <DatePicker
                            value={value || ""}
                            onChange={onChange}
                            position="right"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name={"priority"}
                    render={({ field: { value, onChange, ...field} }) => (
                        <SingleSelect
                            data={['low', 'medium', 'high'].map(item => ({
                                value: item, 
                                label: item}
                            ))}
                            value={value || ''}
                            onChange={onChange}
                        />
                    )}
                />
            </div>

            <div className={styles.cardActions}>
                <button 
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    onClick={ () => item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0,-1)) }
                >
                    {isDeletePending ? <Loader size={15} color="white" /> : <Trash size={15} color="white" />}
                </button>
            </div>
        </div>
    )
}
