import React, { useEffect, useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { ToggleButton } from 'components/admin/postContent';
import { useRouter } from 'next/router';
import { errorModal, getErrorMessage, successModal, validateFields } from 'helpers';
import { useGetAPI, useHtmlToDraftBlocks } from 'hooks';
import getConfig from 'next/config';
import { PostContentAPI } from 'api';
import axios, { AxiosError } from 'axios';
import draftjsToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { convertToRaw, EditorState } from 'draft-js';

const Editor = dynamic(
	() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
	{ ssr: false }
);
const Form = () => {
	const { publicRuntimeConfig } = getConfig()
	const router = useRouter()


	const { idPost, id, content, language: langURL, title } = router.query
	const [language, setLanguage] = useState<boolean>(langURL ? (langURL === 'ENG') : true);
	const form = useRef<HTMLFormElement | null>(null)
	const contentState = useHtmlToDraftBlocks(content as string);
	const [contentText, setContentText] = useState(EditorState.createEmpty())
	const [errorMessage, setErrorMessage] = useState<string>('')
	const postContentAPI = useGetAPI(new PostContentAPI(`${publicRuntimeConfig.apiURL}/postsContent`))
	useEffect(() => {
		if (contentState) {
			setContentText(EditorState.createWithContent(contentState));
		}
	}, [contentState]);
	const handleCreate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const title = form?.current?.titleText.value as string
		const contentTextParsed = draftjsToHtml(convertToRaw(contentText.getCurrentContent()))
		const langSelected = language ? 'ENG' : 'ESP'
		const field = validateFields([{
			name: 'Title',
			value: title
		},
		{
			name: 'Language',
			value: langSelected
		},
		{
			name: 'Content',
			value: contentTextParsed
		},
		{
			name: 'Post',
			value: idPost as string
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await postContentAPI.create({
			title,
			content: contentTextParsed,
			idPost: idPost as string,
			language: langSelected
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.title} was created succesfully!`)
			router.push('/admin/posts')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	const handleUpdate = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()

		setErrorMessage('')
		const title = form?.current?.titleText.value as string
		const contentTextParsed = draftjsToHtml(convertToRaw(contentText.getCurrentContent()))

		const langSelected = language ? 'ENG' : 'ESP'
		const field = validateFields([{
			name: 'Title',
			value: title
		},
		{
			name: 'Language',
			value: langSelected
		},
		{
			name: 'Content',
			value: contentTextParsed
		},
		{
			name: 'Post',
			value: idPost as string
		}
		])

		if (field !== null) {
			setErrorMessage(`${field.name} cannot be empty`)
			return
		}

		const resp = await postContentAPI.update({
			id: id as string,
			title,
			content: contentTextParsed,
			idPost: idPost as string,
			language: langSelected
		})

		if (!axios.isAxiosError(resp) && resp !== null) {
			successModal(`${resp.title} was updated succesfully!`)
			router.push('/admin/posts')
			return
		}

		errorModal(getErrorMessage(resp as AxiosError<any, any>))

	}

	function handleEditorChange(editorState: EditorState) {
		setContentText(editorState)

	}
	return (
		<div className='grid grid-cols-6'>
			<form ref={form} className='justify-center col-span-4 col-start-2' onSubmit={id ? handleUpdate : handleCreate}>
				{
					<div className='text-red-600'>{errorMessage}</div>
				}
				<div className='flex justify-end'>
					<ToggleButton setToggle={setLanguage} toggle={language} />
				</div>
				<div className='flex justify-center mb-3'>
					<ReactTextareaAutosize name='titleText' placeholder='Title' className='self-center text-4xl text-center' defaultValue={title} style={{ backgroundColor: "#181818" }} />
				</div>
				<Editor
					editorState={contentText}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"

					onEditorStateChange={handleEditorChange}
					editorStyle={{
						height: "400px",
					}}
				/>
				<div className='flex justify-center mt-10'>
					<button type='submit' className='p-1 mb-2 text-4xl border rounded-lg hover:border-yellow-400 hover:scale-105'>{id ? 'Update' : 'Create'}</button>
				</div>
			</form>

		</div>
	)
}

export default Form