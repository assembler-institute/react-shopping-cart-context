import { useState } from "react";

function useLoadingStatus() {
	const [hasLoaded, setHasLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [loadingError, setLoadingError] = useState(null);

	return {
		hasLoaded,
		hasError,
		loadingError,
		setHasLoaded,
		setHasError,
		setLoadingError,
	};
}

export default useLoadingStatus;
