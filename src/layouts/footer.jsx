import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={"mt-8"}>
            <nav>
                <ul className={"flex justify-around"}>
                    <li><NavLink to={"/"}>
                        <svg className={"fill-Red w-6"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path
                                d="M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h2c.553,0,1-.448,1-1V14c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v9c0,.552,.447,1,1,1h2c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Z"/>
                        </svg>

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