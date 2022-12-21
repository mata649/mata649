import React, { useEffect, useState } from 'react'

export const ProjectCard = ({ project: { githubUrl, idCategory, description, name }, categoriesMap }: { project: Project, categoriesMap: Map<string, Omit<Category, 'id'>> }) => {
	const [showTruncateContent, setShowTruncateContent] = useState<boolean>(false)
	const [isLong, _] = useState<boolean>(description.length > 117)

	const truncateDescription = (description: string) => {
		if (showTruncateContent) {
			return description
		}
		return description.substring(0, 117) + '...'
	}
	return (

		<div className='flex flex-col justify-between px-3 py-4 border rounded-lg hover:border-yellow-400 hover:scale-105'>
			<div className='w-full py-2 border-b-2'>
				<h2 className='text-xl'>{name}</h2>
			</div>
			<p style={isLong ? { cursor: 'pointer' } : {}} onClick={() => setShowTruncateContent((prev) => !prev)} className='mt-1 text-xl'>{isLong ? truncateDescription(description) : description}</p>
			<div className='flex justify-between'>
				<p className='font-bold' style={{ color: categoriesMap.get(idCategory)?.color }}>{categoriesMap.get(idCategory)?.name}</p>

				<a className='font-bold' href={githubUrl} target="_blank" style={{ color: "#0b7285" }} rel="noopener noreferrer">github</a>
			</div>
		</div>
	)
}
