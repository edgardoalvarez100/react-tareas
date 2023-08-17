import { useEffect, useState } from "react"; // import useEffect
import { Account } from "appwrite";
import { appwriteClient } from "../config/appwrite.config";

export const useAuth = ({ email, password, username }) => {
  const [user, setUser] = useState();

  const signup = async (email, password, username) => {
    // signup code
  };

  const login = async (email, password) => {
    try {
      const appwriteAccount = new Account(appwriteClient);
      return await appwriteAccount.createEmailSession(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const userLogued = async () => {
    try {
      const account = new Account(appwriteClient);
      return await account.get();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const fetchUser = async () => {
    const userDetails = await userLogued();
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
  };
};
