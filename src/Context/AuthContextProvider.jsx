import React, {createContext, useEffect, useState} from 'react'
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    let [isAuth, setIsAuth] = useState(false);
    // const navigate = useNavigate();

    // const login = (userFound) => {
    //     setIsAuth(true);
    //     navigate("/");
    // }

    // const logout = () => {
    //   setIsAuth(false);
    //   navigate('/');
    // };

    // useEffect(() => {
    //   // Check if authentication state is stored in localStorage
    //   const storedAuth = localStorage.getItem('isAuth');
  
    //   if (storedAuth) {
    //     setIsAuth(JSON.parse(storedAuth));
    //   }
    // }, []);
  
    // useEffect(() => {
    //   // Update localStorage when authentication state changes
    //   localStorage.setItem('isAuth', isAuth);
    // }, [isAuth]);


  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider