import { CategoryAPI, ProjectAPI } from 'api';
import axios, { AxiosError } from 'axios';
import { getErrorMessage, errorModal, successModal, validateFields } from 'helpers';
import { useFetch, useGetAPI, useIsLogged } from 'hooks'
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize';


const New = () => {
	useIsLogged()
	const router = useRouter()
	const { id, idCategory, name, description, githubUrl }: Partial<Project> = router.query
	const projectAPI = useGetAPI(new ProjectAPI(`${process.env.NEXT_PUBLIC_API_HOST}/projects`))
	const categoryAPI = useGetAPI(new CategoryAPI(`${process.env.NEXT_PUBLIC_API_HOST}/categories`))

	const { items: categories } = useFetch<Category>(categoryAPI, { currentPage: 1, limit: 10 }, [{ by: 'name', order: 'asc' }])

	const [category, setCategory] = useState(idCategory ? idCategory : '')
	const [errorMessage, setErrorMessage] = useState('')
	const form = useRef<HTMLFormElement | null>(null)

	const handleCategoryChange = (e: { target: { value: any } }) => {
		setCategory(e.target.value)
	}


	const handleCreate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const name = form?.current?.projectName.value as string
		const githubUrl = form?.current?.githubURL.value as string
		const description = form?.current?.description.value as string

		const field = validateFields([{
			name: 'Name',
			value: name
		},
		{
			name: 'Category',
			value: category
		},
		{
			name: 'Github URL',
			value: githubUrl
		},
		{
			name: 'Description',
			value: description
		},

		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await projectAPI.create({
			idCategory: category,
			name,
			description,
			githubUrl
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was created succesfully!`)
			router.push('/admin/projects')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	const handleUpdate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const name = form?.current?.projectName.value as string
		const githubUrl = form?.current?.githubURL.value as string
		const description = form?.current?.description.value as string
		const field = validateFields([{
			name: 'Name',
			value: name
		},
		{
			name: 'Category',
			value: category
		},
		{
			name: 'Github URL',
			value: githubUrl
		},
		{
			name: 'Description',
			value: description
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await projectAPI.update({
			id: id as string,
			idCategory: category,
			name,
			description,
			githubUrl
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.name} was updated succesfully!`)
			router.push('/admin/projects')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))
	}
	return (
		<div className='flex justify-center'>
			<form ref={form} onSubmit={id ? handleUpdate : handleCreate} className='flex flex-col gap-3 px-5 py-4 border rounded-lg border-txt-light dark:border-txt-dark'>

				<h2 className='text-4xl text-center'>{id ? 'Update' : 'Create'}</h2>
				{
					<div className='text-red-600'>{errorMessage}</div>
				}
				<input type="text" placeholder="Name" className='text-xl text-center text-bg-txt-light dark:text-txt-dark' name='projectName' defaultValue={name} />

				<select onChange={handleCategoryChange} defaultValue={idCategory} className='mb-2 text-xl bg-back-light dark:bg-back-dark' >
					{idCategory ? <option value={idCategory}>{categories.find((category) => (category.id === idCategory))?.name}</option> : <option value="">Category</option>}
					{categories.map((category) => (

						idCategory !== category.id &&
						< option key={`cat-${category.id}`} value={category.id} style={{ color: category.color }} >{category.name}</option>

					))}

				</select>
				<input type="url" placeholder="GithubURL" className='self-center text-xl text-center text-bg-txt-light dark:text-txt-dark' name='githubURL' defaultValue={githubUrl} />
				<ReactTextareaAutosize placeholder='Description' className='text-bg-txt-light dark:text-txt-dark' name='description' defaultValue={description} />
				<button type='submit' className='p-1 mb-2 text-2xl border rounded-lg border-txt-light dark:border-txt-dark hover:border-secondary hover:scale-105'>{id ? 'Update' : 'Create'}</button>

			</form>
		</div >
	)
}

export default New