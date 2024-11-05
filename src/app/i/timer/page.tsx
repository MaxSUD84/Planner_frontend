import type { Metadata } from 'next'

import { Heading } from '@/components/ui'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Pomodoro } from './Pomodoro'

export const metadata: Metadata = {
    title: 'Pomodoro таймер',
    ...NO_INDEX_PAGE
}

export default function PomodoroPage() {
    return (
        <div>
            <Heading title="Pomodoro таймер" />
            <Pomodoro />
        </div>
    )
}
