import React from 'react'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'

function MenuItem({ item }: { item: IMenuItem }) {
  return (
    <div>
        <Link href={item.href}
        className='flex items-center gap-4 py-2 px-4 hover:bg-primary hover:text-white text-slate-400 transition-colors duration-300'>
            <item.icon size={24} />
            <span>{item.label}</span>
        </Link>
    </div>
  )
}

export default MenuItem