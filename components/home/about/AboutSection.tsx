import React from 'react'

export const AboutSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<section id="about" className="grid grid-cols-6 mt-24 ">
			{children}
		</section>
	)
}
