import Badge from "./badge.jsx";
import PropTypes from "prop-types";

const DetailsTitle = ({movie}) => {

    const average = Math.round(movie.vote_average*10)/10;

  return(
      <section id={"title"} className={"mt-4 mx-10 pb-4 border-b border-gray-light  flex flex-col"}>
          <div className={"flex"}>
              <div className={"w-3/4 flex justify-start items-center"}>
                  <h2 className={"text-white text-2xl ml-4"}>{movie.title}</h2>
              </div>
              <Badge content={"4k"} isRoundedFull={false}/>
          </div>
          <div className={"flex mt-5"}>
              <div className={"flex items-center justify-center"}>
                  <svg className={"w-5"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M7 1C3.6875 1 1 3.6875 1 7C1 10.3125 3.6875 13 7 13C10.3125 13 13 10.3125 13 7C13 3.6875 10.3125 1 7 1Z"
                          stroke="#BBBBBB" stroke-miterlimit="10"/>
                      <path d="M7 3V7.5H10" stroke="#BBBBBB" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className={"text-gray ml-1.5"}>{movie.runtime} minutes</p>
              </div>
              <div className={"flex ml-6"}>
                  <svg className={"w-5 fill-gray"} xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                       data-name="Layer 1" viewBox="0 0 24 24">
                      <path
                          d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/>
                  </svg>
                  <p className={"text-gray ml-1.5"}>{average} (IMDb)</p>
              </div>
          </div>
      </section>
  )
}
DetailsTitle.propTypes = {
    movie: PropTypes.object.isRequired,
};
export default DetailsTitle;