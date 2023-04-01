import Link from 'next/link'
import React from 'react'

export const AddButton = ({href}:{href:string}) => {
	return (
		<Link href={`/admin/${href}`} className='p-1 mb-2 text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-txt-dark hover:scale-105'>Add</Link>
	)
}
