import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
];
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className={` bg-gradient-to-r cursor-pointer from-yellow-500 to-red-600 shadow-md w-max rounded-sm absolute z-20 lg:top-[45%] top-[40%] right-2 lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowForward color="white" size={15} />
    </div>
  );
};
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className={`  bg-gradient-to-r cursor-pointer from-red-600 to-yellow-500  shadow-md w-max rounded-sm absolute z-20 left-2 lg:top-[45%] top-[40%] lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
      onClick={onClick}
    >
      <IoIosArrowBack color="white" size={15} />
    </div>
  );
};
export default function SliderMain(props: any) {
  let settings = {
    speed: 500,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className="  relative  ">
      <Slider {...settings}>
        {listImg.map((item, index) => (
          <div
            key={index}
            className="w-full text-sm lg:h-[300px]  h-[200px] relative overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={item.urlImg}
              alt=""
            />
            <span className="absolute bottom-0 left-0 text-white w-full py-1 px-2 bg-[#212121d3]">
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
