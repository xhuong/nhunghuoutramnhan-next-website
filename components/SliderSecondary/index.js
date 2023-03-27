import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SliderSecondary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider_secondary">
      <Slider {...settings}>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <Image src={require("@/public/images/customers/customer03.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Chồng tôi làm việc văn phòng, ngồi nhiều hay bị đau lưng, nhức mỏi qua tìm hiểu tôi thấy rượu nhung hươu rất
            tốt và có nhiều công dụng nữa. Tôi đã mua rượu huyết nhung hươu tại Nhung Hươu Trầm Nhân, rượu ở đây rất
            chất lượng, chồng tôi rất thích.
          </p>
          <p className="slider_secondary_customer">Cô Trương Thanh Hoa - Kinh Doanh Nội Thất</p>
        </li>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <Image src={require("@/public/images/customers/customer01.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Tôi có mua nhung hươu tươi tại Nhung Hươu Trầm Nhân để sử dụng và phải nói rằng nhung hươu rất tươi và chất
            lượng. Sẽ tiếp tục ủng hộ cửa hàng trong những lần tới.
          </p>
          <p className="slider_secondary_customer">Anh Nguyễn Văn Thắng - Nhân Viên Bất Động Sản</p>
        </li>
        <li className="slider_secondary_item">
          <div className="slider_secondary_image_wrapper">
            <Image src={require("@/public/images/customers/customer02.png")} alt="" />
          </div>
          <p className="slider_secondary_customer_opinion">
            Nhung Hươu ở đây rất chất lượng mua về ngâm rượu uống rất tốt. Nhân viên giao hàng rất nhanh. Sẽ tiếp tục
            ủng hộ cửa hàng.
          </p>
          <p className="slider_secondary_customer">Anh Huỳnh Nhật Huy - Kỹ Sư Giám Sát Công Trình</p>
        </li>
      </Slider>
    </div>
  );
}

export default SliderSecondary;
