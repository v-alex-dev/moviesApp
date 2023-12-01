import PropTypes from "prop-types";

const Header = ({ children }) => {
  return(
      <header className={"flex flex-col mx-5 text-left"}>
            <h1 className={"text-white text-2xl mb-5 mt-8"}><span className={"text-Red text-xl"}>Movie</span>Browser</h1>
          {children}
      </header>
  )
}

Header.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Header