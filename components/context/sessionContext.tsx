import { useSession } from "hooks";
import React, { createContext, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";

export const SessionContext = createContext<{
	jwt: string;
	isLogged: boolean;
	logIn: (jwt: string) => void;
	logOut: () => void;
}>({
	jwt: "",
	isLogged: false,
	logIn: (jwt: string) => { },
	logOut: () => { },
});


export const SessionProvider = ({ children }: { children: React.ReactNode }) => {

	const session = useSession()

	return (
		<SessionContext.Provider value={session}>

			{children}

		</SessionContext.Provider>
	);
};