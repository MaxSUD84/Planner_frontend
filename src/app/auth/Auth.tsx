'use client'

import { Button, Heading, InputField } from "@/components/ui"
import { DASHBOARD_PAGES } from "@/config/pages-url.config"
import { authService } from "@/services/auth.service"
import { IAuthForm } from "@/types"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

export const Auth = () => {
    const { register, handleSubmit, reset} = useForm<IAuthForm>({
        mode: 'onChange'
    })
    const [isLoginForm, setIsLoginForm] = useState(false)
    
    const {push} = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['auth', 'login'],
        mutationFn:async (data: IAuthForm) => authService.main(isLoginForm ? 'sign-in' : 'sign-up', data),
        onSuccess() {
            toast.success('Successfully login!')
            reset()
            push(DASHBOARD_PAGES.HOME)
        }
    })
    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        mutate(data)
    }

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
        <form 
            className="w-1/3 sm:w-1/2 m-auto shadow bg-sidebar rounded-xl p-layout"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Heading 
            // title={isLoginForm ? 'Войти' : 'Регистрация'}  
            title={"Авторизация"}
            />
            <InputField 
                id="email"
                label="Email: "
                placeholder="example@example.com"
                type="email"
                extra="mb-4"
                {...register('email', { required: "Необходимо ввести email" })}
            />
            <InputField 
                id="password"
                label="Пароль: "
                placeholder="Введите пароль"
                type="password"
                extra="mb-6"
                {...register('password', { required: "Пароль не может быть пустым" })}
            />
            <div className="flex items-center gap-5 justify-center">
                <Button 
                    onClick={() => setIsLoginForm(true)}
                >Войти</Button>
                <Button 
                    onClick={() => setIsLoginForm(false)}
                >Регистрация</Button>
            </div>
        </form>
    </div>
  )
}
