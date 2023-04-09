import { SessionContext } from 'components/context'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ModeButton } from './ModeButton'
import { useTheme } from 'next-themes'
export const Navbar = () => {
	const { isLogged, logOut } = useContext(SessionContext)
	const { theme, setTheme, systemTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const handleOnClick = () => {
		const navbar = document.getElementById('navbar-default')
		if (navbar?.classList.contains('hidden')) {
			navbar.classList.remove('hidden')
		} else {
			navbar?.classList.add('hidden')

		}
	}
	return (


		<nav className=" px-2 sm:px-4 py-2.5 rounded mb-16" id='up'>
			<div className="container flex flex-wrap items-center justify-end mx-auto">

				<button onClick={handleOnClick} type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg dark:text-txt-dark text-txt-light md:hidden hover:bg-secondary " >
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex flex-col p-4 mt-4 border rounded-lg border-txt-light dark:border-txt-dark md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 ">
						<li>
							<ModeButton setTheme={setTheme} currentTheme={currentTheme} />
						</li>
						<li>
							<Link href="/#about" className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 " >About</Link>
						</li>
						<li>
							<Link href="/#skills" className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 ">Skills</Link>
						</li>
						<li>
							<Link href="/#projects" className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 ">Projects</Link>
						</li>
						{/* <li>
							<Link href="/blog" className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 ">Blog</Link>
						</li> */}
						<li>
							<Link href="#contact" className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 ">Contact</Link>
						</li>

						{isLogged &&
							<li>
								<button onClick={() => { logOut() }} className="block py-2 pl-3 pr-4 rounded dark:text-txt-dark text-txt-light hover:bg-secondary md:border-0 ">Log Out</button>
							</li>
						}
					</ul>
				</div>
			</div>
		</nav>


	)
}
