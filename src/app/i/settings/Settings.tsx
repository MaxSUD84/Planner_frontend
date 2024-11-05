'use client'

import { Button, InputField } from "@/components/ui"
import { useInitialData } from "@/hooks/useInitialData"
import { useUpdateSettings } from "@/hooks/useUpdateSettings"
import { TypeUserForm } from "@/types"
import { SubmitHandler, useForm } from "react-hook-form"

export const Settings = () => {
    const { register, handleSubmit, reset } = useForm<TypeUserForm>({
        mode: 'onChange',
    })

    useInitialData(reset)
    const { isPending, mutate } = useUpdateSettings()

    const onSubmit: SubmitHandler<TypeUserForm> = (data, event) => {
        event?.preventDefault()
        const { password, ...rest } = data
        
        mutate({
            ...rest,
            password: password || undefined
        })
    }


    return ( 
        <div>
            <form 
                className="w-2/4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <InputField
                            id='email'
                            label="Email"
                            type="email"
                            placeholder="Введите email"
                            {...register('email', {
                                required: 'Email обязательное поле'})}
                            extra="mb-4" 
                        />
                        <InputField
                            id='name'
                            label="Name"
                            type="text"
                            placeholder="Введите Имя"
                            {...register('name', {
                                required: 'Имя обязательное поле'})}
                            extra="mb-4" 
                        />
                        <InputField
                            id='password'
                            label="Password"
                            type="password"
                            placeholder="Пароль"
                            {...register('password')}
                            extra="mb-4" 
                        />
                    </div>

                    <div>   
                        <InputField
                            id='workInterval'
                            label="Work interval"
                            type="number"
                            placeholder="Интервал рабочего времени"
                            isNumber
                            {...register('workInterval', {
                                valueAsNumber: true,})}
                            extra="mb-4" 
                        />
                        <InputField
                            id='breakInterval'
                            label="Break interval"
                            type="number"
                            placeholder="Интервал перерыва"
                            isNumber
                            {...register('breakInterval', {
                                valueAsNumber: true, })}
                            extra="mb-4" 
                        />
                        <InputField
                            id='intervalsCount'
                            label="Interval count"
                            type="number"
                            placeholder="Количество интервалов"
                            isNumber
                            {...register('intervalsCount', {
                                valueAsNumber: true, })}
                            extra="mb-4"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                >{isPending ? 'Загрузка...' : 'Сохранить'}</Button>
            </form>
        </div>
    )
}
