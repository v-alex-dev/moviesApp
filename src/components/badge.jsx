import PropTypes from "prop-types";


const Badge = ({content, isRoundedFull}) => {
    const rounded = () => {
        return isRoundedFull ? 'rounded-3xl' : 'rounded';
    }
  return(
      <>
          <div className={`min-w-14 will-change-contents bg-gradient-to-br from-border-gradiant-gray to-border-gradiant-transparent flex items-center justify-around ${rounded()}`}>
              <div className={`w-full m-[1px] rounded bg-default p-2 flex items-center justify-center ${rounded()}`}>
                  <span className={"text-gray"}>{content}</span>
              </div>
          </div>
      </>
  )
}

Badge.Proptype = {
    content: PropTypes.string.isRequired
}

export default Badge