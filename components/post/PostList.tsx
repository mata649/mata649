import React from 'react'


export const PostList = ({ children }: {
	children: React.ReactNode,

}) => {
	return (<>
		<div className='grid grid-cols-1 gap-4 mx-2 sm:mx-20 lg:grid-cols-3 md:grid-col-3 '>
			{children}

		</div>

	</>
	)
}
