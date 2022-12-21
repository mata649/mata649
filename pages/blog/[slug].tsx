
import { useGetPostContents } from 'hooks'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import parse from 'html-react-parser'
import { ToggleButton } from 'components/admin/postContent'
import moment from 'moment'

const PostContent = () => {
	const router = useRouter()
	const { slug } = router.query
	const [toggle, setToggle] = useState(true)
	const { contents, publishedDate } = useGetPostContents(slug as string)


	return (

		<div className='grid grid-cols-4'>
			{contents.length > 0 ? (
				<div className='col-span-2 col-start-2 '>
					{contents.length > 1 && <div className='flex justify-end col-span-full'>
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
										(toggle ? null : ' transform translate-x-5 bg-yellow-400')
									}
								></div>

							</div>
							<span className='ml-1 -mb-2'>ESP</span>

						</div>
					</div>}
					<div className="article-container"  >
						<h1 className='mb-6 text-6xl text-center'>{contents[toggle ? 0 : 1].title}</h1>

						{parse(contents[toggle ? 0 : 1].content)}

					</div>
					<div className='flex justify-end text-2xl'>
						<span>Published Date: {moment(publishedDate).calendar()}</span>
					</div>
				</div>

			) : <h1 className='flex justify-center text-4xl text-center col-span-full'>Content not found for this post</h1>}
		</div >
	)
}

export default PostContent