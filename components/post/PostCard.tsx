import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export const PostCard = ({ publishedDate, defaultTitle, slug }: Post) => {
	return (
		<Link className="flex flex-col justify-between h-40 p-4 border-2 rounded-lg cursor-pointer lg:col-start-2 hover:border-yellow-400 hover:scale-105 hover:border-2" href={`/blog/${slug}`}>
			<h2 className="text-4xl">{defaultTitle}</h2>
			<p className='text-lg'>{moment(publishedDate).calendar()}</p>
		</Link>
	)
}
