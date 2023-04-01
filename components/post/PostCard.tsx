import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export const PostCard = ({ publishedDate, defaultTitle, slug }: Post) => {
	return (
		<Link className="flex flex-col justify-between h-40 col-start-1 p-4 border-2 rounded-lg cursor-pointer border-txt-light dark:border-txt-dark sm:col-start-2 sm:col-span-2 md:col-start-2 md:col-span-1 hover:border-secondary dark:hover:border-secondary hover:scale-105 hover:border-2 hover:ease-out hover:duration-100" href={`/blog/${slug}`}>
			<h2 className="text-4xl">{defaultTitle}</h2>
			<p className='text-lg'>{moment(publishedDate).calendar()}</p>
		</Link>
	)
}
