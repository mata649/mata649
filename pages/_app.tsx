import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'components/general'
import { AppProvider, SessionContext, SessionProvider } from 'components/context'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSession } from 'hooks'
import axios from 'axios'

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
			<title>Jose Mata</title>

		</Head>
		<AppProvider>
			<SessionProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</AppProvider>
	</>)
}
