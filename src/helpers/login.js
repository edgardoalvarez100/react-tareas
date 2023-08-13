import { loginAccount } from "../config/appwrite.config";

export const loginHandler = async (user) => {
  await loginAccount(user);
};
