import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className='bg-back-light dark:bg-back-dark'>
			<Head />
			<body >
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}