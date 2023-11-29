import PropTypes from "prop-types";

const Header = ({ children }) => {
  return(
      <header className={"flex flex-col m-5 text-left"}>
            <h1 className={"text-white text-xl mb-5"}><span className={"text-Red text-xl"}>Movie</span>Browser</h1>
          {children}
      </header>
  )
}

Header.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Header