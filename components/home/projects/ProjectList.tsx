import React, { Dispatch, SetStateAction } from 'react'

import { Pagination } from '../../general/Pagination'

export const ProjectList = ({
	children,
	setFilters,
	categories,
	totalPages,
	setPagination,
	pagination }: {
		children: React.ReactNode,
		setFilters: Dispatch<SetStateAction<Partial<Project>>>,
		categories: Category[],
		totalPages: number,
		pagination: Pagination,
		setPagination: Dispatch<SetStateAction<Pagination>>
	}) => {
	const handleCategoryChange = (e: { target: { value: any } }) => {
		setFilters({ idCategory: e.target.value })

	}

	return (
		<>
			<div  className='grid grid-cols-1 gap-4 mx-2 sm:mx-20 md:grid-cols-3 '>
				<div className='flex justify-end mt-4 col-span-full'>
					<select onChange={handleCategoryChange} defaultValue="" className='text-2xl bg-black' style={{ backgroundColor: "#181818", borderColor: "#ededed" }}>
						<option value="" >Category</option>
						{categories.length > 0 && categories.map(({ id, color, name }) => (
							<option key={`cat-${id}`} value={id} style={{ color: color }}>{name}</option>
						))}
					</select>
				</div>
				{children}

			</div>
			<Pagination pagination={pagination} setPagination={setPagination} totalPages={totalPages} />
		</>
	)
}
