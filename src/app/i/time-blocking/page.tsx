import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui'
import { TimeBlocking } from './TimeBlocking'


export const metadata: Metadata = {
    title: 'Расписание',
    description: 'Admin panel',
    ...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
  return <div>
    <Heading title='Расписание'/>
    <TimeBlocking />
  </div>
}

