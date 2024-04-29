import { createContext } from 'react';
import { useAuth } from '../hooks/auth-hook';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: true,
  login: () => {},
  logout: () => {}
});

const AuthContextProvider = (props) => {
    const { token, login, logout, userId } = useAuth();

    const value = {
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider
            value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;