import Slider from "react-slick";
import { LeftArrow, RightArrow } from "./arrows";

export function CarouselComponent({ children }: { children: React.ReactNode }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
