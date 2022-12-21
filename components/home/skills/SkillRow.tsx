import React from 'react'

export const SkillRow = ({ name }: { name: string }) => {
	return (
		<p key={name} className="text-2xl">{`-${name}`}</p>
	)
}
