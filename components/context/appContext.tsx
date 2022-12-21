import React, { createContext, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";

export const AppContext = createContext<{ setLoading: (val: boolean) => void }>({
	setLoading: (val: boolean) => { }
});


export const AppProvider = ({ children }: { children: React.ReactNode }) => {

	const [loading, setLoading] = useState<boolean>(false);

	return (
		<AppContext.Provider value={{ setLoading }}>
			<LoadingOverlay
				spinner
				active={loading}>
				{children}
			</LoadingOverlay>


		</AppContext.Provider>
	);
};