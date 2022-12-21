import Link from 'next/link'
import React from 'react'

export const BackButton = () => {
  return (
	<Link href='/admin' className='p-1 mb-2 text-xl rounded-lg hover:text-yellow-400 hover:scale-105'>Back</Link>
  )
}
