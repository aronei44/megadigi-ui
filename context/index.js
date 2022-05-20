import { createContext, useContext, useEffect, useState } from 'react';
import callAPI from '../config/api';

export const UserContext = createContext({
});

export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    );
}
