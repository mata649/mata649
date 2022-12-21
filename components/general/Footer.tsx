import React from 'react'
import { Navbar } from './Navbar'

export const Footer = () => {
	return (
		<div id='contact' className='flex flex-col mt-48 border-t'>
			<div className='flex items-center justify-center gap-3 mt-20'>
				<h1 className='text-6xl '>Contact</h1>
				<a href="#up">
					<span className="text-4xl material-symbols-outlined">
						arrow_upward
					</span>
				</a>

			</div>
			<div className='flex justify-center mt-10 mb-20 '>
				<ul className='flex flex-col gap-10 text-2xl font-bold md:flex-row md:justify-center'>
					<li className='flex flex-col items-center border-b-2 border-b-blue-700'>
						<span className="mr-2 text-6xl material-symbols-outlined">
							perm_contact_calendar
						</span>
						<a href="https://www.linkedin.com/in/jose-alberto-mata-mena-a06761198/" target="_blank" rel="noopener noreferrer">linkedin/jose-mata</a></li>
					<li className='flex flex-col items-center border-b-2 border-b-green-600'><span className="mr-2 text-6xl material-symbols-outlined">
						terminal
					</span><a href="https://github.com/mata649" target="_blank" rel="noopener noreferrer">github/mata649</a></li>
					<li className='flex flex-col items-center border-b-2 border-b-yellow-400'><span className="mr-2 text-6xl material-symbols-outlined">
						mail
					</span><a href="mailto:mata649@hotmail.com" target="_blank" rel="noopener noreferrer">mata649@hotmail.com</a></li>
				</ul>

			</div>

		</div>
	)
}
