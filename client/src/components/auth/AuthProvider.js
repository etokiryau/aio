import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../context/AuthContext";

export const AuthProvider = ({ children }) => {

  const { token, userId, login, logout } = useAuth();

  const isAuthenticated = !!token;

  let value = { token, userId, login, logout, isAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}