import { useState, useCallback, useEffect } from "react"

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const storageName = 'userData';

    const login = useCallback((jwtToken, id, callback) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}));

        setTimeout(callback, 100); 
    }, []);

    const logout = useCallback((callback) => {
        setToken(null);
        setUserId(null);

        localStorage.removeItem(storageName);

        setTimeout(callback, 100); 
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.token, data.userId);
        }
    }, [login])

    return {login, logout, token, userId};
}