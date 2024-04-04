import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slide.css";

const listImg = [
  {
    urlImg:
      "https://hoathinh3d.io/wp-content/uploads/2021/04/the-gioi-hoan-my-poster-video.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2022/10/gia-thien-poster.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2022/07/tru-tien-phan-2-poster.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2023/06/dau-la-dai-luc-2-poster.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2023/06/thuong-nguyen-do-poster-1.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2023/06/thuong-nguyen-do-poster-1.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2023/06/thuong-nguyen-do-poster-1.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
  {
    urlImg:
      "https://www.hoathinh3d.io/wp-content/uploads/2023/06/thuong-nguyen-do-poster-1.jpg",
    nameMovie: "Tên Phim",
    authorMovie: "Tên Tác Giả",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={` bg-gradient-to-r cursor-pointer from-yellow-500 to-red-600 shadow-md w-max rounded-sm absolute z-20  top-40% bottom-[40%] right-2 lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowForward color="white" size={15} />
    </button>
  );
};
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`  bg-gradient-to-r cursor-pointer from-red-600 to-yellow-500  shadow-md w-max rounded-sm absolute z-20 left-2  top-40% bottom-[40%] lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowBack color="white" size={15} />
    </button>
  );
};
export default function SliderMain() {
  let settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" lg:h-[300px]  h-[200px] relative lg:shadow-lg  lg:shadow-[#12171b] rounded-lg lg:rounded-md overflow-hidden ">
      <Slider {...settings}>
        {listImg.map((item, index) => (
          <div
            key={index}
            className="w-full  lg:h-[300px]  h-[200px] text-sm  relative overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={item.urlImg}
              alt=""
            />
            <span className="absolute bottom-0 left-0 text-white flex flex-col lg:gap-1 w-full px-4  p-2 bg-[#21212198]">
              <p className="lg:text-2xl text-xl py-1 lg:py-0">
                {item.nameMovie}
              </p>
              <p className="hidden font-thin lg:block">[{item.authorMovie}]</p>
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
