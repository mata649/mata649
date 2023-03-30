import axios from 'axios'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext, SessionContext } from 'components/context'
import { useSession } from 'hooks'

const Login = () => {
	const form = useRef<HTMLFormElement | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const { publicRuntimeConfig } = getConfig();
	const { setLoading } = useContext(AppContext)
	const {isLogged, logIn} = useContext(SessionContext)
	const router = useRouter()

	useEffect(() => {
		setLoading(true)
		if (isLogged) {
			router.push('/admin')
		}
		setLoading(false)
	}, [isLogged, router, setLoading])


	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setErrorMessage('')
		const password = form?.current?.password.value
		const email = form?.current?.email.value

		if (email === '') {
			setErrorMessage('Email cannot be empty ')
			return
		}
		if (password === '') {
			setErrorMessage('Password cannot be empty ')
			return
		}
		setLoading(true)
		try {
			const resp = await axios.post(`${publicRuntimeConfig.apiURL}/users/auth`, {
				email,
				password
			})
			if (resp.status === 200) {
				logIn(resp.data?.jwt)
				router.push('/admin')
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 401) {
					setErrorMessage('Invalid credentials')
				}
			}
		}
		setLoading(false)
	}
	return (
		<div className='flex justify-center'>

			<form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-6 px-10 text-center border rounded-lg'>
				<h1 className='text-6xl'>LOGIN</h1>
				{
					<div className='text-red-600'>{errorMessage}</div>
				}
				<input name='email' type='email' placeholder='email' className='text-lg text-center text-black' />
				<input name='password' type='password' placeholder='password' className='text-lg text-center text-black' />
				<button className='mb-10 border'>Login</button>
			</form>
		</div>

	)
}

export default Login