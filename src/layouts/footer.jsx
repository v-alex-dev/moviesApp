import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul className={"flex justify-around"}>
                    <li><NavLink to={"/"}>
                        <img src="../../public/Home.svg" alt="home"/>
                    </NavLink></li>
                    <li><NavLink to={"/browser"}>
                        <img src="../../public/search.svg" alt="search"/>
                    </NavLink></li>
                    <li><NavLink to={"/account"}>
                        <img src="../../public/Group%20253.svg" alt=""/>
                    </NavLink></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;