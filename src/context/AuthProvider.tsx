//Lib
import {
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react';

//Types
import { ContextType } from '../types';

const AuthContext = createContext<ContextType | undefined>(undefined);

type AuthProviderType = {
  children: ReactNode;
};
const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }} >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider;