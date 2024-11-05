'use client'

import Loader from "@/components/ui/Loader"
import { useProfile } from "@/hooks/useProfile"

export function Statistics() {
    const { data, isLoading } = useProfile()

    return isLoading ? <Loader /> : (
        <div className="grid grid-cols-4 gap-12 mt-7">
            {data?.statistics.length 
            ? data?.statistics.map(statistic => (
                <div className="rounded p-layout text-center bg-border/5 hover:-translate-y-3 transition-transform duration-500"
                 key={statistic.label}>
                    <div className="text-xl text-gray-500 font-bold">{statistic.label}</div>
                    <div className="text-3xl text-gray-300 font-semibold">{statistic.value}</div>
                </div>
            ))
            : <div>Статистика отсутствует</div>}
        </div>
    )
}