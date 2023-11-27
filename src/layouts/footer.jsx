import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><NavLink to={"/"}></NavLink></li>
                    <li><NavLink to={"/browser"}></NavLink></li>
                    <li><NavLink to={"/account"}></NavLink></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;