import type { TypeTimeBlockFormState } from "@/types"
import { Controller, SubmitHandler, useFormContext } from "react-hook-form"
import { useUpdateTimeBLock } from "../hooks/useUpdateTimeBlock"
import { useCreateTimeBLock } from "../hooks/useCreateTimeBlock"

import { COLORS } from "./colors.data"
import { Button, InputField } from "@/components/ui"
import { SingleSelect } from "@/components/ui/task-edit/SingleSelect"

export function TimeBlockingForm() {

    const {
        control, register, watch, reset, handleSubmit, getValues
    } = useFormContext<TypeTimeBlockFormState>()

    const existsId = watch("id")

    const { updateTimeBLock, isUpdatePending } = useUpdateTimeBLock()
    const { createTimeBLock, isCreatePending } = useCreateTimeBLock()

    const onSubmit: SubmitHandler<TypeTimeBlockFormState> = (data) => {
        const { color, id, ...rest } = data

        const dto = { ...rest, color: color || undefined }

        if (id)
            updateTimeBLock({ id, data: dto })
        else 
            createTimeBLock(dto)
        
        reset({
            color: COLORS[COLORS.length - 1],
            duration: 0,
            name: '',
            id: undefined,
            order: 1
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/5"
        >
            <InputField
                {...register("name", {
                    required: true
                })}
                id="name"
                label="Имя временного блока"
                placeholder="Введите название временного блока"
                extra="mb-4"
            />
            <InputField
                {...register("duration", {
                    required: true,
                    valueAsNumber: true
                })}
                id="duration"
                label="Длительность"
                placeholder="Введите длительность в минутах (мин.1)"
                isNumber
                extra="mb-4"
            />
            <div>
                <span className="inline-block mb-11.5">
                    Цвет
                </span>
                <Controller
                    control={control}
                    name="color"
                    render={({ field: { onChange, value }}) => (
                        <SingleSelect
                            data={COLORS.map(color => ({
                                value: color,
                                label: color
                            }))}
                            onChange={onChange}
                            value={value || COLORS[COLORS.length - 1]}
                            isColorSelect
                        />
                    )}
                />
            </div>

            <Button
                type="submit"
                className="mt-6"
                disabled={isUpdatePending || isCreatePending}
            >
                {existsId ? "Обновить" : "Создать"}
            </Button>
        </form>
    )
}
