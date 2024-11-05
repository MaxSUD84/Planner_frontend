'use client'

import type { TypeTimeBlockFormState } from "@/types"
import { FormProvider, useForm } from "react-hook-form"
import { TimeBlockingForm } from "./form/TimeBlockingForm"
import { TimeBlockingList } from "./form/TimeBlockingList"

interface Props {}

export function TimeBlocking({}: Props) {

    const methods = useForm<TypeTimeBlockFormState>()

    return (
        <FormProvider {...methods}>
            <div className="grid grid-cols-2 gap-12 mt-7">
                <TimeBlockingList />
                <TimeBlockingForm />
            </div>
        </FormProvider>
    )
}
