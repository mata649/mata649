import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'components/general'
import { AppProvider, SessionProvider } from 'components/context'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSession } from 'hooks'
import axios from 'axios'
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps }: AppProps) {
	const { jwt } = useSession()
	useEffect(() => {
		if (jwt) {
			axios.defaults.headers.common['Authorization'] = jwt
		} else {
			axios.defaults.headers.common['Authorization'] = null

		}
	}, [jwt])

	return (<>
		<Head>
			<title>💾 J0S3 M4T4</title>

		</Head>
		<AppProvider>
			<SessionProvider>
				<ThemeProvider enableSystem={true} attribute="class">
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</SessionProvider>
		</AppProvider>
	</>)
}
