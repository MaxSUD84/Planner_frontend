import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { MENU_ITEMS } from "./menu.data";
import MenuItem from "./MenuItem";

export function Sidebar() {
    return <aside className="bg-sidebar border-r border-border h-full flex flex-col justify-between">
        <div>
            <Link
                href="/dashboard"
                className="flex items-center gap-4 py-2 px-4 hover:bg-primary hover:text-white text-slate-400 transition-colors duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 12l8.955-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 12l8.955 8.955c.44.439 1.152.439 1.591 0L21.75 12"
                    />
                </svg>
                <span className="font-large text-slate-400 hover:text-white">
                    Планировщик
                </span>
            </Link>
            <div className="relative p-3">
                <LogoutButton />
                {MENU_ITEMS.map(item => (
                    <MenuItem key={item.href} item={item} />
                ))}
            </div>
        </div>
        <footer className="p-3">
            <div className="flex items-center gap-4 py-2 px-4 hover:bg-primary hover:text-white text-slate-400 transition-colors duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                </svg>
                <span className="font-medium text-slate-400 hover:text-white">
                    Помощь
                </span>
            </div>
        </footer>
    </aside>
}