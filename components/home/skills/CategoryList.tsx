import React from 'react'

export const CategoryList = ({ children }: { children: React.ReactNode }) => {
	return (<>

		<section  className="grid grid-cols-1 gap-4 mx-2 sm:mx-20 md sm:grid-cols-2 md:grid-cols-3 xl:mx-36 2xl:mx-64 ">

			{children}
		</section>
	</>
	)
}
