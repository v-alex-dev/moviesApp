import PropTypes from "prop-types";

const Header = ({ children }) => {
  return(
      <header className={"flex flex-col justify-between"}>
            <h1 className={"text-white text-xl"}><span className={"text-Red text-xl "}>Movie</span>Browser</h1>
          {children}
      </header>
  )
}

Header.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Header