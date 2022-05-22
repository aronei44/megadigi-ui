import { createContext, useState } from 'react';

export const UserContext = createContext({
});

export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [umkm, setUmkm] = useState({});
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            umkm,
            setUmkm
        }}>
            {children}
        </UserContext.Provider>
    );
}
