import {Outlet, useNavigate, useNavigation} from "react-router-dom";
import Loader from "../pages/loader.jsx";

const Layout = () => {
    const {state} = useNavigation();
    return (
        <>
            {state === 'loading' && <Loader/>}
            <Outlet/>
        </>
    )
}

export default Layout;