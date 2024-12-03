import React, { useRef } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARD_DATA } from "../common/helper";
import RightButton from "../../assets/image/svg/RightButton.svg";
import LeftButton from "../../assets/image/svg/LeftButton.svg";

const SliderExample = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <div className="flex justify-center gap-4 mb-[-50px]">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="mt-[-50px] me-[10px] mb-[50px]"
                    >
                        <img src={LeftButton} alt="Previous" />
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="mt-[-50px] mb-[50px]"
                    >
                        <img src={RightButton} alt="Next" />
                    </button>
                </div>
            </div>
        ),
    };

    return (
        <div style={{ width: "90%", margin: "0 auto" }}>
            <SlickSlider ref={sliderRef} {...settings}>
                {CARD_DATA.map((data, i) => (
                    <div key={i} className="mt-[200px] mb-[100px]">
                        <div className="bg-[#FFF3ED] p-5 rounded-lg shadow-md max-w-[365px] mx-auto">
                            <img
                                src={data.imgSrc}
                                alt=""
                                className="mb-8 rounded-lg max-w-[60px]"
                            />
                            <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                            <p className="text-lg font-light text-[#101010] leading-[150%]">
                                {data.para}{" "}
                                <span className="flex cursor-pointer font-semibold text-[#FF5501]">
                                    Read more
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

export default SliderExample;
