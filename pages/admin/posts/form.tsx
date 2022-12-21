import { PostAPI } from 'api';
import axios, { AxiosError } from 'axios';
import { getErrorMessage, errorModal, successModal, validateFields } from 'helpers';
import { useFetch, useGetAPI } from 'hooks'
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'


const New = () => {
	const { publicRuntimeConfig } = getConfig()
	const router = useRouter()
	const { id, defaultTitle, slug }: Partial<Post> = router.query
	const postAPI = useGetAPI(new PostAPI(`${publicRuntimeConfig.apiURL}/posts`))

	const [errorMessage, setErrorMessage] = useState('')
	const form = useRef<HTMLFormElement | null>(null)



	const handleCreate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const defaultTitle = form?.current?.defaultTitle.value as string
		const slug = form?.current?.slug.value as string
		const field = validateFields([{
			name: 'Default Title',
			value: defaultTitle
		},
		{
			name: 'Slug',
			value: slug
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await postAPI.create({
			defaultTitle,
			slug
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.defaultTitle} was created succesfully!`)
			router.push('/admin/posts')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	const handleUpdate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const defaultTitle = form?.current?.defaultTitle.value as string
		const slug = form?.current?.slug.value as string
		const field = validateFields([{
			name: 'Default Title',
			value: defaultTitle
		},
		{
			name: 'Slug',
			value: slug
		}
		])
		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await postAPI.update({
			id: id as string,
			defaultTitle,
			slug
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.defaultTitle} was updated succesfully!`)
			router.push('/admin/posts')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))
	}
	return (
		<div className='flex justify-center'>
			<form ref={form} onSubmit={id ? handleUpdate : handleCreate} className='flex flex-col gap-3 px-5 py-4 border rounded-lg'>

				<h2 className='text-4xl text-center'>{id ? 'Update' : 'Create'}</h2>
				{
					<div className='text-red-600'>{errorMessage}</div>
				}
				<input type="text" placeholder="Default Title" className='text-xl text-center text-black' name='defaultTitle' defaultValue={defaultTitle} />
				<input type="text" placeholder="Slug" className='text-xl text-center text-black' name='slug' defaultValue={slug} />

				<button type='submit' className='p-1 mb-2 text-2xl border rounded-lg hover:border-yellow-400 hover:scale-105'>{id ? 'Update' : 'Create'}</button>

			</form>
		</div >
	)
}

export default New