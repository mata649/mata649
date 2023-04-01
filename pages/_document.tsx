import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html >
			<Head />
			<body className='bg-back-light dark:bg-back-dark' >
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}