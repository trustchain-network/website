// @ts-nocheck
import React from "react";
import PhoneImage from "../assets/images/phone.png";

const Download = () => {
    return (
        <div className="jumbotron flex flex-col lg:flex-row py-20 items-center justify-center text-black ">
            <img
                src={PhoneImage}
                alt="phone-image"
                className="w-[250px] lg:w-max"
            />
            <div className="text-center lg:ml-[100px] lg:text-start  max-w-[570px] ">
                <h1 className=" text-2xl lg:text-[40px] font-semibold ">
                    Download Our App
                </h1>
                <p className="text-[18px] my-4 ">
                    TrustChain is a company that aims to provide secure and
                    efficient solutions for anti-counterfeiting, document
                    security, and off-chain payments using blockchain
                    technology.
                </p>
                <button
                    type="button"
                    className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-6 py-4 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                    <svg
                        className="w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="apple"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        ></path>
                    </svg>
                    Download on the IOS
                </button>
                <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-6 py-4 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 ml-3">
                    <svg
                        className="w-5 h-5 mr-2 -ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="google-play"
                    >
                        <path
                            fill="#2196F3"
                            d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                        ></path>
                        <path
                            fill="#FFC107"
                            d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                        ></path>
                        <path
                            fill="#4CAF50"
                            d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                        ></path>
                        <path
                            fill="#F44336"
                            d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                        ></path>
                    </svg>
                    Download on the Playstore
                </button>
            </div>
        </div>
    );
};

export default Download;
