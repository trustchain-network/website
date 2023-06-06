// @ts-nocheck
import React from "react";
import JumbotronImage from "../assets/images/jumbotron.png";

const Jumbotron = () => {
    return (
        <div className="jumbotron py-20 flex mx-[100px] items-center  text-secondary ">
            <div>
                <h1 className="lg:text-[44px] md:text-[32px] sm:text-[20px] max-w-[763px] md:w-fit ">
                    Secure Your Trust With{" "}
                    <span className="font-bold text-primary">Trustchain</span>{" "}
                    Using Protocol ZK Smart{" "}
                    <span className="font-bold text-primary">
                        NFC Blockchain
                    </span>{" "}
                    Authentication
                </h1>
                <p className="text-sm md:text-base lg:text-[19px] max-w-[490px] md:w-fit sm:w-fit my-4 font-light ">
                    Trustchain is a company that aims to provide secure and
                    efficient solutions for anti-counterfeiting
                </p>
                <button className="text-white bg-primary text-sm md:text-base lg:text-lg px-4 py-2  lg:px-6 lg:py-4 rounded-[10px]">
                    Try Now
                </button>
            </div>
            <img
                src={JumbotronImage}
                alt="jumbotron"
                className="hidden md:block lg:block"
            />
        </div>
    );
};

export default Jumbotron;
