// @ts-nocheck
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./assets/images/carousel-1.jpg";
import Image2 from "./assets/images/carousel-2.jpg";
import Avatar1 from "./assets/images/avatar-1.png";
import Avatar2 from "./assets/images/avatar-2.png";
import Avatar3 from "./assets/images/avatar-3.png";
import Download from "./components/Download";
import nike from "./assets/images/nike.png";
import lv from "./assets/images/lv.png";
import adidas from "./assets/images/adidas.png";
import zara from "./assets/images/zara.png";
import image7 from "./assets/images/image7.png";
import image8 from "./assets/images/image8.png";
import image9 from "./assets/images/image9.png";

export default function App() {
    const [sliderRef, setSliderRef] = useState({
        sliderPrev: null,
        sliderNext: null,
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ListTeam = [
        {
            name: "Irman T Wibawa",
            image: Avatar1,
            job: "Chief Executive Officer",
            position: "Founder of Trustchain",
        },
        {
            name: "Anonymous",
            image: Avatar2,
            job: "Commissioner",
            position: "Co Founder of Trustchain",
        },
        {
            name: "Musa",
            image: Avatar3,
            job: "design & Developer",
            position: "Business Development",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="bg-[#f4f4f4] overflow-hidden">
                {/* jumbotron */}
                <Jumbotron />
                {/* Features */}
                <Features />
                {/* Dowload */}
                <Download />
                {/* Products */}
                <div className="mx-[100px] md:min-w-[500px] text-center ">
                    <h1 className="text-[32px] text-black font-medium mb-20 ">
                        Our Products
                    </h1>
                    {/* <div className="absolute left-0 w-[100px] translate-x-[20px] translate-y-[120px]">
                        <button onClick={sliderRef?.slickPrev}>
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </div> */}
                    <Slider ref={setSliderRef} arrows={false} {...settings}>
                        <div>
                            <img src={Image1} alt="image-1" />
                        </div>
                        <div>
                            <img src={Image2} alt="image-2" />
                        </div>
                        <div>
                            <img src={Image2} alt="image-2" />
                        </div>
                        <div>
                            <img src={Image2} alt="image-2" />
                        </div>
                    </Slider>
                    {/* <div className="absolute right-0 w-[100px] -translate-x-[50px] -translate-y-[150px] ">
                        <button onClick={sliderRef?.slickNext}>
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div> */}
                </div>
                {/* Patners */}
                <section className="text-center my-24 ">
                    <h1 className=" text-2xl lg:text-[32px] text-black font-medium mb-6 ">
                        Potential Partner & Investors
                    </h1>
                    <div className="flex flex-col gap-y-10 mx-auto my-0">
                        <div className="containerTop flex gap-x-[33px]  mx-auto my-0 max-w-[1000px] lg:gap-x-[126px] items-center ">
                            <img
                                src={nike}
                                alt="nike"
                                className="w-[50px] lg:w-[120px] h-fit"
                            />
                            <img
                                src={lv}
                                alt="lv"
                                className=" w-[50px] lg:w-[120px] h-fit"
                            />
                            <img
                                src={adidas}
                                alt="adidas"
                                className=" w-[50px] lg:w-[120px] h-fit"
                            />
                            <img
                                src={zara}
                                alt="zara"
                                className=" w-[50px] lg:w-[120px] h-fit"
                            />
                        </div>
                        <div className="containerTop flex gap-x-[75px] mx-auto my-0 max-w-[1000px] lg:gap-x-[126px] items-center ">
                            <img
                                src={image8}
                                alt="image8"
                                className="w-[50px] lg:w-[183px] h-fit"
                            />
                            <img
                                src={image7}
                                alt="image7"
                                className=" w-[50px] lg:w-[217px] h-fit"
                            />
                            <img
                                src={image9}
                                alt="image9"
                                className="w-[50px] lg:w-[202px] h-fit"
                            />
                        </div>
                    </div>
                </section>
                {/* Team */}
                <section className="text-center">
                    <h1 className="text-2xl lg:text-[32px] text-black font-medium mb-8">
                        Meet the Team
                    </h1>
                    <div className=" w-full relative flex flex-col lg:flex-row gap-[20px] ">
                        <span className="invisible lg:visible w-full bg-primary h-[66px] absolute top-14"></span>
                        {ListTeam.map((item, index) => (
                            <div
                                key={index + 1}
                                className="card z-10 mx-auto my-0 rounded-[5px] bg-[#dedede] w-[369px] max-h-[500px]  "
                            >
                                <img
                                    src={item.image}
                                    alt="avatar"
                                    className=" w-[180px] lg:w-fit rounded-[50%] mx-auto my-0 pt-5 "
                                />
                                <h2 className="text-[#090808] text-2xl lg:text-[32px] font-medium mt-[32px] ">
                                    {item.name}
                                </h2>
                                <h3 className="uppercase text-xl lg:text-2xl font-light mt-[10px] ">
                                    {item.job}
                                </h3>
                                <p className=" text-base lg:text-lg font-semibold py-5">
                                    {item.position}
                                </p>
                            </div>
                        ))}
                        <span className=" invisible lg:visible w-full bg-primary h-[66px] absolute bottom-14"></span>
                    </div>
                </section>
                {/* Email */}
                <section className="w-full max-w-xs text-center mx-auto my-0 pt-[5rem] ">
                    <h1 className="text-[32px] text-black font-light">
                        Send us Messages
                    </h1>
                    <form class="pt-6 pb-8 mb-20">
                        <div class="mb-8">
                            <input
                                class=" bg-transparent placeholder:text-center border-b-[1px] border-[#bababa] appearance-none py-2 px-3 text-[#bababa] leading-tight focus:outline-none focus:shadow-outline"
                                id="Fullname"
                                type="text"
                                placeholder="Fullname"
                            />
                        </div>
                        <div class="mb-8">
                            <input
                                class="bg-transparent placeholder:text-center border-b-[1px] border-[#bababa] appearance-none py-2 px-3 text-[#bababa] leading-tight focus:outline-none focus:shadow-outline"
                                id="Email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <button className="text-white mx-auto my-0 justify-center text-lg bg-primary px-10 py-4 w-full rounded-[10px]">
                            Send
                        </button>
                    </form>
                </section>
                <Footer />
            </div>
        </div>
    );
}
