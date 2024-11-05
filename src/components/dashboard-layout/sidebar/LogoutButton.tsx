'use client'
import Loader from "@/components/ui/Loader";
import { useLogout } from "@/hooks/useLogout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const { logout } = useLogout()

    return (
        <div className="absolute top-1 right-1">
            <button className=" opacity-20 hover:opacity-100 transition-opacity duration-300"
            onClick={() => logout()}
            >
                <LogOut size={24} color="white" />
            </button>
        </div>
    )    
}