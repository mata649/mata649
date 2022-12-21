import Link from 'next/link'
import React from 'react'

export const AddButton = ({href}:{href:string}) => {
	return (
		<Link href={`/admin/${href}`} className='p-1 mb-2 text-xl hover:text-yellow-400 hover:scale-105'>Add</Link>
	)
}
