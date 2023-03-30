import { CategoryAPI } from 'api';
import axios, { AxiosError } from 'axios';
import { getErrorMessage, errorModal, successModal, validateFields } from 'helpers';
import { useGetAPI, useIsLogged } from 'hooks'
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'



const New = () => {
	useIsLogged()
	const { publicRuntimeConfig } = getConfig()
	const router = useRouter()
	const { id, color, name }: Partial<Category> = router.query
	const categoryAPI = useGetAPI(new CategoryAPI(`${publicRuntimeConfig.apiURL}/categories`))

	const [errorMessage, setErrorMessage] = useState('')
	const form = useRef<HTMLFormElement | null>(null)


	const handleCreate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const name = form?.current?.categoryName.value as string
		const color = form?.current?.color.value as string
		const field = validateFields([{
			name: 'Name',
			value: name
		},
		{
			name: 'Color',
			value: color
		}

		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await categoryAPI.create({
			name,
			color
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was created succesfully!`)
			router.push('/admin/categories')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	const handleUpdate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const name = form?.current?.categoryName.value as string
		const color = form?.current?.color.value as string
		const field = validateFields([{
			name: 'Name',
			value: name
		},
		{
			name: 'Color',
			value: color
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await categoryAPI.update({
			id: id as string,
			name,
			color
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was updated succesfully!`)
			router.push('/admin/categories')
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
				<input type="text" placeholder="Name" className='text-xl text-center text-black' name='categoryName' defaultValue={name} />
				<input type="color" placeholder="color" className='self-center text-xl text-center text-black' name='color' defaultValue={color ? color :'#1818181818'} />


				<button type='submit' className='p-1 mb-2 text-2xl border rounded-lg hover:border-yellow-400 hover:scale-105'>{id ? 'Update' : 'Create'}</button>

			</form>
		</div >
	)
}

export default New