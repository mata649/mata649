import React from 'react'

export const ToggleButton = ({ setToggle, toggle }: { setToggle: React.Dispatch<React.SetStateAction<boolean>>, toggle: boolean }) => {
	const toggleClass = " transform translate-x-5 bg-yellow-400";

	return (
		<div className='flex items-center justify-center '>
			<span className='ml-1 mr-1 -mb-2'>ENG</span>
			<div
				className="flex items-center w-12 h-6 p-1 bg-gray-400 rounded-full cursor-pointer place-self-end md:w-14 md:h-7"
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{/* Switch */}
				<div
					className={
						"bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
						(toggle ? null : toggleClass)
					}
				></div>

			</div>
			<span className='ml-1 -mb-2'>ESP</span>

		</div>
	)
}
