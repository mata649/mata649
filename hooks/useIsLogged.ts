import { SessionContext } from "components/context";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export const useIsLogged = () => {
	const router = useRouter();

	const { isLogged } = useContext(SessionContext);

	useEffect(() => {
	  if (!isLogged) {
		router.push("/login");
	  }
	}, [isLogged, router]);

};
