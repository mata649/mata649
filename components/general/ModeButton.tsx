import React from 'react'

export const ModeButton = ({ setTheme, currentTheme }: { setTheme: (theme: string) => void, currentTheme: string | undefined }) => {
	const currentThemeClass = " transform translate-x-5 ";

	return (
		<div className='flex items-center justify-center py-2 pl-3 pr-4 '>
			<div
				className="flex items-center w-12 h-6 p-1 rounded-full cursor-pointer dark:bg-back-light bg-back-dark place-self-end md:w-14 md:h-7"
				onClick={() => {
					setTheme(currentTheme === 'dark' ? 'light' : 'dark');
				}}
			>
				{/* Switch */}
				<div
					className={
						"bg-back-light dark:bg-back-dark md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
						(currentTheme === "dark" ? null : currentThemeClass)
					}
				></div>

			</div>

		</div>
	)
}
