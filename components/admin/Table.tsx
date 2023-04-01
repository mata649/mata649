import React, { ReactNode } from 'react'

export const Table = ({ children, labels }: {
	children: ReactNode,
	labels: string[]
}) => {
	return (<>

		<table className='border border-collapse border-txt-light dark:border-txt-dark'>
			<thead>
				<tr>
					{labels.map((label) => (<th key={label}>{label}</th>))}
				</tr>
			</thead><tbody>
				{children}
			</tbody></table>

	</>
	)
}
