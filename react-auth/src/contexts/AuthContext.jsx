import Axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// REST API URL
const BASE_URL = "http://localhost:5001";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    verify();
  }, []);

  const login = async (email, password, navigate) => {
    setIsLoading(true);
    try {
      const response = await Axios.post(
        `${BASE_URL}/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setUser(response.data);
      if (navigate) {
        navigate("/profile");
      }
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (firstName, lastName, email, password, navigate) => {
    setIsLoading(true);
    try {
      const response = await Axios.post(
        `${BASE_URL}/users/register`,
        {
          firstName,
          lastName,
          isVerified: false,
          email,
          password,
        },
        // Dit zorgt ervoor dat je cookies kan gebruiken
        { withCredentials: true }
      );

      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const verify = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get(`${BASE_URL}/users/verify`, {
        withCredentials: true,
      });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
