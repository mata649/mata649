import React from 'react'

export const SkillList = ({ children, name, color }: { children: React.ReactNode, name: string, color: string }) => {
	return (
		<div className="flex flex-col items-center gap-3 px-3 py-4 border-2 rounded-lg" style={{ borderColor: color }}>
			<h2 className="text-4xl ">{name}</h2>
			{children}
		</div>
	)
}
