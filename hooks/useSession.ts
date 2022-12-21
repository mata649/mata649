import {  useEffect, useState } from 'react';


export const useSession = () => {
	const [isLogged, setIsLogged] = useState(false);
	const [jwt, setJwt] = useState('');

	useEffect(() => {
		const localJWT = localStorage.getItem('jwt');
		setJwt(localJWT ? localJWT : '');

		if (localJWT) {
			setIsLogged(true);
		} else {
			setIsLogged(false);
		}
	}, []);

	const logOut = () => {
		setJwt('');
		localStorage.removeItem('jwt');
	};
	const logIn = (jwt: string) => {
		setJwt(jwt);
		localStorage.setItem('jwt', jwt);
	};

	return {
		jwt,
		isLogged,
		logIn,
		logOut,
	};
};
