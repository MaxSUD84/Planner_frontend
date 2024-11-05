'use client'

import Loader from "@/components/ui/Loader"
import { useProfile } from "@/hooks/useProfile"

export function Profile() {
    const { data, isLoading } = useProfile()
    return <div className="absolute top-big-layout right-big-layout">
        {isLoading ? <Loader /> : (
            <div className="flex items-center gap-3">
                <div className="text-right mr-3">
                    <p className="text-sm text-gray-500 font-semibold">{data?.user?.name}</p>
                    <p className="text-xs text-gray-400 font-semibold">{data?.user?.email}</p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary">
                    {/* {data?.user?.avatar && <img src={data.user.avatar} alt="avatar" />} */}
                    {data?.user?.name?.charAt(0).toUpperCase() || 'A'}
                </div>
            </div>
        )}
    </div>
}