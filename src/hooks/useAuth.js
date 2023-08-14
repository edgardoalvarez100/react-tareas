import { useEffect, useState } from "react"; // import useEffect
import { logueadoHandler } from "../config/appwrite.config";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const signup = async (email, password, username) => {
    // signup code
  };

  const login = async (email, password) => {
    // login code
  };

  const getCurrentUser = async () => {
    return await logueadoHandler();
  };

  // fetching the logged user data
  useEffect(() => {
    const fetchUser = async () => {
      const userDetails = await getCurrentUser();
      setUser(userDetails);
    };
    fetchUser();
  }, []);

  return {
    signup,
    login,
    user,
    getCurrentUser, // return it
  };
};

export default useAuth;
