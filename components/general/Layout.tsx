import axios from 'axios';
import { SessionContext } from 'components/context';
import React, { useContext, useEffect } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';


export const Layout = ({ children }: { children: React.ReactNode }) => {
	const { jwt } = useContext(SessionContext)
	useEffect(() => {
		if (jwt) {
			axios.defaults.headers.common['Authorization'] = jwt
		} else {
			axios.defaults.headers.common['Authorization'] = null

		}
	}, [jwt])

	return <div className=' dark:bg-back-dark dark:text-txt-dark bg-back-light text-txt-light'>
		<Navbar />
		{children}
		<Footer />
	</div>;
};
