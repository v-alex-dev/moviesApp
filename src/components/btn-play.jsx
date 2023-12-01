import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BtnPlay = ({linkClass, linkSvg, link, isGradiant}) => {

    const gradiant = () => {
        if (isGradiant) {
            return (
            <>
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(0)">
                        <stop offset="50%" stopColor="lightgray"/>
                        <stop offset="95%" stopColor="white"/>
                    </linearGradient>
                </defs>
                <path
                    d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062"
                    fill="url(#myGradient)"/>
            </>
        )
        }
        return (
            <path
                d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062"
                fill="currentColor"/>
        )
    }

    return (
        <Link className={linkClass} to={link} target={"_blank"}>
            <svg className={linkSvg} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24">
                {gradiant()}
            </svg>
        </Link>
    )
}

BtnPlay.propTypes = {
    linkClass: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isGradiant: PropTypes.bool.isRequired
}

export default BtnPlay