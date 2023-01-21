import { useEffect, useState } from 'react';

export const useSession = () => {
	useEffect(() => {
		const localJWT = localStorage.getItem('jwt');
		setIsLogged(localJWT ? true : false);
		setJwt(localJWT ? localJWT : '');
	}, []);

	const [isLogged, setIsLogged] = useState(false);
	const [jwt, setJwt] = useState('');

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
