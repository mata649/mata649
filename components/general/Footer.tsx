import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faIdBadge,  faEnvelope,  } from "@fortawesome/free-regular-svg-icons";
import { faTerminal, faUpLong } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
	return (
		<div id='contact' className='flex flex-col mt-48 border-t'>
			<div className='flex items-center justify-center gap-3 mt-20'>
				<h1 className='text-6xl '>Contact</h1>
				<a href="#up">
					<FontAwesomeIcon className='text-3xl text-white ' icon={faUpLong} />

				</a>

			</div>
			<div className='flex justify-center mt-10 mb-20 '>
				<ul className='flex flex-col gap-10 text-2xl font-bold md:flex-row md:justify-center'>
					<li className='flex flex-col items-center border-b-2 border-b-blue-700'>
						<FontAwesomeIcon className='text-5xl text-white' icon={faIdBadge} />
						<a href="https://www.linkedin.com/in/jose-alberto-mata-mena-a06761198/" target="_blank" rel="noopener noreferrer">linkedin/jose-mata</a></li>
					<li className='flex flex-col items-center border-b-2 border-b-green-600'>
						<FontAwesomeIcon className='text-5xl text-white ' icon={faTerminal} />

						<a href="https://github.com/mata649" target="_blank" rel="noopener noreferrer">github/mata649</a></li>
					<li className='flex flex-col items-center border-b-2 border-b-yellow-400'>
						<FontAwesomeIcon className='text-5xl text-white ' icon={faEnvelope} />

						<a href="mailto:mata649@hotmail.com" target="_blank" rel="noopener noreferrer">mata649@hotmail.com</a></li>
				</ul>

			</div>

		</div>
	)
}
