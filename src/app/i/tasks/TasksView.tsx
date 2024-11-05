'use client'

import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ListView } from "./list-view/ListView"
import { KanbanView } from "./kanban-view/KanbanView"
import { SwitcherView } from "./SwitcherView"

export type TypeView = 'kanban' | 'list'

export function TasksView() {
    const [type, setType, isLoading] = useLocalStorage<TypeView>({
        key: 'view-type', 
        initialValue: 'list'
    })
    
    if (isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
            <SwitcherView type={type} setType={setType} />
            { type === 'list' && <ListView /> }
            { type === 'kanban' && <KanbanView /> }          
        </div>
    )
}
