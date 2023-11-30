import {Oval} from "react-loader-spinner";

const Loader = () => {


    return (
        <>
            <div className={"w-full h-full flex justify-center items-center"}>
                <Oval   height={80}
                        width={80} color={"#FF8F71"}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}/>
            </div>
        </>
    )
}

export default Loader;