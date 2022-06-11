import React from 'react';
import {SiEthereum} from "react-icons/si";

const Loader = () => {
    return (
        <div className={"flex justify-center items-center py-3"}>
            <div className={"loader-design animate-ping rounded-full h-16 w-16 border-b-2"}>
                <SiEthereum fontSize={21} color={"#fff"} className={"m-5"}/>
            </div>
        </div>

    );
};

export default Loader;