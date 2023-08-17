import { logout } from "../config/appwrite.config"
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

    const navigate = useNavigate();

    const logoutProcess = async () => {
        const pr = await logout();

    }
    logoutProcess().then(() => {
        navigate("/");
    });


}
