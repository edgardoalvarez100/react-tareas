import { useEffect, useState } from "react"; // import useEffect
import { logueadoHandler } from "../config/appwrite.config";

const useAuth = ({ email, password, username }) => {
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

  const fetchUser = async () => {
    const userDetails = await getCurrentUser();
    setUser(userDetails);
  };

  // fetching the logged user data
  useEffect(() => {
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
