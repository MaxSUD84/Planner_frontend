import { Metadata } from 'next'
import { Auth } from './Auth'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
    title: 'Sign in',
    description: 'Sign in to your account',
    ...NO_INDEX_PAGE
}
export default function AuthPage() {
    return (
        <Auth />
    )
}

