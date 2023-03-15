import { useCallback } from "react";

export const useHttpAps = () => {
    const clientId = 'tSWiGLZVyUbMm6phm8wDBkb3dxjNFkRv';
    const clientSecret = 'bCziZvYLmADMdmWd';
    const url = 'https://developer.api.autodesk.com/authentication/v1/authenticate';

    const getToken = useCallback(async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&scope=data:read`,
            })

            if (!response.ok) {
                throw new Error(`Could not fetch: ${url}, status: ${response.status}`)
            }

            const data = await response.json();
            const token = data.access_token;

            return token;
        } catch(e) {
            throw e;
        } 
    }, []);

    return {getToken};
}