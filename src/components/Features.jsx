// @ts-nocheck
import React from "react";
import CoinIcon from "../assets/icons/coin.svg";
import DocumentIcon from "../assets/icons/document.svg";
import FoodIcon from "../assets/icons/food.svg";
import ShoesIcon from "../assets/icons/shoes.svg";
import HealthIcon from "../assets/icons/health.svg";
import MotorbikeIcon from "../assets/icons/motorbike.svg";
import HomeIcon from "../assets/icons/home.svg";

const Features = () => {
    const listFeature = [
        {
            title: "Mina Cash",
            image: CoinIcon,
            description:
                "TrustChains ZK Smart NFC technology can also be used for of-chain physical payments without transaction costs.",
        },
        {
            title: "Document Security",
            image: DocumentIcon,
            description:
                "with fake IDs and other documents being used for identity theft and other illegal activities",
        },
        {
            title: "Food and Beverage",
            image: FoodIcon,
            description:
                "ZK Smart NFC can be utilized in the food and beverage industry to enhance food safety and quality through secure and transparent supply chain management.",
        },
        {
            title: "Fashion",
            image: ShoesIcon,
            description:
                "Counterfeiting is a major issue in the clothing and fashion industry",
        },
        {
            title: "Pharmaceuticals and Healthcare",
            image: HealthIcon,
            description:
                "pharmaceuticals is one of the most valuable segments of global commerce in illegally copied items",
        },
        {
            title: "Transport Track and Trace",
            image: MotorbikeIcon,
            description:
                "Transport track and trace is a critical application that requires high level sof security and data integrity to ensure the safety and security of goods being trans-ported.",
        },
        {
            title: "Architecture",
            image: HomeIcon,
            description:
                "Smart NFCs can be used for identity cards,key passes for building access,and other ofcial sign documents ,ensuring that each document is unique and verifable.",
        },
    ];

    return (
        <div className="bg-white xl:mx-[120px] rounded-[50px] text-center">
            <h1 className=" lg:text-[32px] font-medium pt-5">Features</h1>
            <div className="cardFeatures flex flex-col gap-y-[50px] lg:flex-row lg:flex-wrap items-center lg:gap-x-40 lg:gap-y-[70px] mx-[50px] mt-[70px] text-center h-max">
                {listFeature.map((item, index, row) => {
                    if (index + 1 === row?.length) {
                        return (
                            <div className="max-w-[220px] mx-auto mb-5 ">
                                <img src={item.image} className="mx-auto" />
                                <h1 className="text-2xl py-4">{item.title}</h1>
                                <p className="text-secondary text-base">
                                    {item.description}
                                </p>
                            </div>
                        );
                    }
                    return (
                        <div className="max-w-[220px]">
                            <img src={item.image} className="mx-auto" />
                            <h1 className="text-2xl py-4">{item.title}</h1>
                            <p className="text-secondary text-base">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
