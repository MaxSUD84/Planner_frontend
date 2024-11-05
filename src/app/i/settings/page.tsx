import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui'
import { Settings } from './Settings'

export const metadata: Metadata = {
    title: 'Settings',
    ...NO_INDEX_PAGE
}

export default function SettingsPage() {
    return (
        <div>
            <Heading title="Настройки" />
            <Settings />
        </div>
    )
}
