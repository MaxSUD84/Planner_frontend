import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui'
import { TasksView } from './TasksView'

export const metadata: Metadata = {
    title: 'Задачи',
    ...NO_INDEX_PAGE
}

export default function TasksPage() {
    return (
        <div>
            <Heading title="Задачи" />
            <TasksView />
        </div>
    )
}
