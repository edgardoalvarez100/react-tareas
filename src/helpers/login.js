import { loginAccount, logueadoHandler } from "../config/appwrite.config";

export const loginHandler = async (user) => {
  await loginAccount(user);
};

export const logueadoHelper = async () => {
  return await logueadoHandler();
};
