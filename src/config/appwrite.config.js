import { Account, Client, Databases } from "appwrite";

const cliente = new Client();

export const appwriteClient = cliente
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL) // Your API Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID); // Your project ID

export const loginAccount = async ({ email, password }) => {
  try {
    const appwriteAccount = new Account(appwriteClient);
    return await appwriteAccount.createEmailSession(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const appwriteDatabase = new Databases(
  appwriteClient,
  import.meta.env.VITE_DATABASE_ID
);

export const logout = async () => {
  try {
    const account = new Account(appwriteClient);
    return account.deleteSession("current");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const register = async (email, password) => {
  try {
    const account = new Account(appwriteClient);
    return account.create("unique()", email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logueadoHandler = async () => {
  try {
    const account = new Account(appwriteClient);
    return await account.get();
  } catch (error) {
    throw new Error(error.message);
  }
};
