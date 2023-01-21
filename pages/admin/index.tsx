import Link from 'next/link'
import React, { useEffect } from 'react'
import { AdminCard } from 'components/admin'
import { useSession } from 'hooks'
import { useRouter } from 'next/router'

const Admin = () => {
	const { isLogged } = useSession()
	const router = useRouter()
	useEffect(() => {

		// if (!isLogged) {

		// 	router.push('/login')
		// }
	}, [isLogged, router])

	return (
		<div className='grid grid-cols-6 gap-4 '>
			<div className='grid grid-cols-1 col-span-4 col-start-2 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
				<AdminCard name='Skills' route='skills' />
				<AdminCard name='Categories' route='categories' />
				<AdminCard name='Project' route='projects' />
				<AdminCard name='Post' route='posts' />
			</div>
		</div>
	)
}

export default Admin