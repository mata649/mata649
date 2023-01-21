import { useSession } from 'hooks'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
	const { isLogged, logOut } = useSession()
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

				<button onClick={handleOnClick} type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg text-slate-200 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 ">
						<li>
							<Link href="/#about" className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent" >About</Link>
						</li>
						<li>
							<Link href="/#skills" className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent">Skills</Link>
						</li>
						<li>
							<Link href="/#projects" className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent">Projects</Link>
						</li>
						<li>
							<Link href="/blog" className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent">Blog</Link>
						</li>
						<li>
							<Link href="#contact" className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent">Contact</Link>
						</li>

						{isLogged &&
							<li>
								<button onClick={() => { logOut() }} className="block py-2 pl-3 pr-4 rounded text-slate-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover: md:p-0 dark:text-gray-400 md:dark:hover:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent">Log Out</button>
							</li>
						}
					</ul>
				</div>
			</div>
		</nav>


	)
}
