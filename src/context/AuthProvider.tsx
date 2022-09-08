import {
  createContext,
  useContext,
  useState
} from 'react';

type Context = {
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<Context>();

type Props = {
  children: any;
};
const AuthProvider: React.FC<Props> = ({ children }) => {
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