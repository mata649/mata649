import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const Pagination = ({ totalPages, pagination, setPagination }: { totalPages: number, pagination: Pagination, setPagination: Dispatch<SetStateAction<Pagination>> }) => {
	const [pageRange, setPageRange] = useState<number[]>([])

	useEffect(() => {
		const currentPage = pagination.currentPage
		let totalRange = Array.from(Array(totalPages).keys())
		let downRange = currentPage - 4 + (currentPage - 4 < 0 ? Math.abs(currentPage - 4) : 0)
		let upRange = currentPage + 4 + (currentPage - 4 < 0 ? Math.abs(currentPage - 4) : 0)


		totalRange = totalRange.slice(downRange, upRange)
		setPageRange(totalRange)
	}, [pagination.currentPage, totalPages])

	const handleChangePage = (page: number) => {
		setPagination((prev) => ({ ...prev, currentPage: page }))
	}
	return (

		<div className='flex justify-center gap-4 mt-5'>
			{
				totalPages !== undefined && pageRange.map(
					(value, index) => (<a
						style={
							value + 1 === pagination.currentPage ?
								{ color: "#eab257" } : {}
						} key={`pag-${value + 1}`}
						className='text-2xl cursor-pointer'
						onClick={() => handleChangePage(value + 1)}
					>
						{value + 1}
					</a>))}
		</div>
	)
}
