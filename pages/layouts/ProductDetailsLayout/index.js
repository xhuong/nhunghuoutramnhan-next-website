import { Col, InputNumber, Row } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCartPlus, BsFillTelephoneFill, BsGift } from "react-icons/bs";
import { formatPrice } from "@/utils";
import Image from "next/image";
import Rate from "@/components/Rate";
import ButtonSecondary from "@/components/ButtonSecondary";
import Section from "@/pages/layouts/Section";
import styles from "@/styles/ProductDetailsLayout.module.scss";
import { useState } from "react";
import ModalInformation from "@/components/ModalInformation";

function ProductDetailsLayout({ data }) {
  const { id, name, imageUrl, oldPrice, newPrice, star, categoryId, discount, description } = data;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOk = () => {
    setIsOpenModal(false);
  };

  return (
    <Section>
      <Row gutter={16}>
        <Col xl={10} lg={8} md={12} sm={24} xs={24}>
          <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
              <div className="relative">
                <Image src={imageUrl} alt={name} style={{ margin: "0 auto" }} />
              </div>
            </Col>
          </Row>
          <Row gutter={8} className="mt-4 mb-4 md:mb-0">
            <Col className="cursor-pointer border-red-700 border-solid border-2" xl={6} md={6} sm={6} xs={6}>
              <div className="relative">
                <Image src={imageUrl} alt="" />
              </div>
            </Col>
            <Col className="cursor-pointer" xl={6} md={6} sm={6} xs={6}>
              <div className="relative">
                <Image src={imageUrl} alt="" />
              </div>
            </Col>
            <Col className="cursor-pointer hidden-sm hidden-xs" xl={6} md={6}>
              <div className="relative">
                <Image src={imageUrl} alt="" />
              </div>
            </Col>
            <Col className="cursor-pointer hidden-sm hidden-xs" xl={6} md={6}>
              <div className="relative">
                <Image src={imageUrl} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={8} lg={10} md={12} sm={24} xs={24}>
          <h1 className="font-bold uppercase text-md-custom">{name}</h1>

          <div className="flex items-center">
            <Rate allowHalf disabled value={4.5} />
            <span className="ml-2">1 đánh giá</span>
          </div>

          <p className="flex items-center gap-x-2 text-sm sm:text-lg">
            <span className="text-primary-color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Thương hiệu:</span> nhunghuoutramnhan.com
          </p>

          <p className="flex items-center gap-x-2 text-sm sm:text-lg">
            <span className="text-primary-color">
              <AiFillCheckCircle />
            </span>
            <span className="font-bold">Tình trạng:</span>
            <span className="text-green-600">Còn hàng</span>
          </p>

          {newPrice && oldPrice ? (
            <div className="flex items-baseline gap-x-4 mt-2">
              <span className="price_new">{formatPrice(newPrice)}đ</span>
              <span className="price_old">{formatPrice(oldPrice)}đ</span>
            </div>
          ) : (
            <div className="flex items-baseline gap-x-4">
              <span className="price_new">Giá liên hệ</span>
            </div>
          )}

          <p className="mt-2 max-line-4 text-lg">{description}</p>

          <ul className="mt-10 relative p-4 py-8 border-red">
            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="text-green-600 mt-2" style={{ minWidth: "16px" }} />
              <p className="max-line-three text-lg">Cung cấp sản phẩm số lượng lớn cho doanh nghiệp. Có hóa đơn VAT.</p>
            </li>

            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="text-green-600 mt-2" style={{ minWidth: "16px" }} />
              <p className="max-line-three text-lg">
                Hotline/Zalo {"("}24/7{")"}: 0375.524.580
              </p>
            </li>

            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="text-green-600 mt-2" style={{ minWidth: "16px" }} />
              <p className="max-line-three text-lg">Giao hàng nhanh trên toàn quốc.</p>
            </li>

            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="text-green-600 mt-2" style={{ minWidth: "16px" }} />
              <p className="max-line-three text-lg">Giao hàng hỏa tốc 2h tại Hà Nội và TP.HCM</p>
            </li>

            <li className="flex items-start gap-x-4 ">
              <AiFillCheckCircle className="text-green-600 mt-2" style={{ minWidth: "16px" }} />
              <p className="max-line-three text-lg">
                Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng với hóa đơn trên 3.000.000 vnđ
              </p>
            </li>

            <span
              className={`${styles.promotion_label} absolute left-4 uppercase bg-red-500 text-white py-1 px-4 rounded-lg flex items-center gap-x-2`}
            >
              <BsGift /> Khuyến mãi
            </span>
          </ul>

          <ModalInformation title="Thông báo" open={isOpenModal} onOk={handleOk} onCancel={handleOk}>
            <p>
              Xin lỗi quý khách, hiện tại tính năng mua hàng đang phát triển. Quý khách muốn mua hàng vui lòng liên hệ
              SĐT
              <b> 0375.524.580</b> hoặc nhắn tin qua ứng dụng Zalo
            </p>
          </ModalInformation>

          <div className="flex gap-x-2 mb-2 mt-4 sm:flex-row flex-col gap-y-2">
            <InputNumber className="sm:flex-1 w-1/2" min={1} max={10} defaultValue={1} size="large" />
            <ButtonSecondary
              className="sm:flex-1 uppercase items-center"
              type="primary"
              size="full-btn"
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <BsCartPlus /> Thêm vào giỏ
            </ButtonSecondary>
            <ButtonSecondary
              className="sm:flex-1 uppercase"
              type="secondary"
              size="full-btn"
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              Chọn mua
            </ButtonSecondary>
          </div>

          <div className="flex gap-x-2 sm:flex-row flex-col gap-y-2">
            <ButtonSecondary className="uppercase tracking-wider" type="third" size="full-btn">
              Tư vấn zalo
            </ButtonSecondary>
            <ButtonSecondary className="uppercase tracking-wider" type="third" size="full-btn">
              <BsFillTelephoneFill />
              0375.524.580
            </ButtonSecondary>
          </div>
        </Col>
        <Col xl={6} lg={6} className="hidden-md hidden-sm hidden-xs">
          {/* delivery  */}
          <ul className={`${styles.commit_list}`}>
            <li className={`${styles.commit_item} mb-4 inline-block border-gray p-4`}>
              <div className={`${styles.commit_image_wrapper} w-20 ml-auto mr-auto policy_icon my-4 rounded-full`}>
                <Image className="" src={require("@/public/images/icons/policy01.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Giao hàng tận nơi</h5>
              <p className="text-center mt-4 text-lg text-xs-custom">
                Miễn phí giao hàng đơn trên 1.000.000đ. Giao hàng toàn quốc, thanh toán tại nhà
              </p>
            </li>
            <li className={`${styles.commit_item} mb-4 inline-block border-gray p-4`}>
              <div className={`${styles.commit_image_wrapper} w-20 ml-auto mr-auto policy_icon my-4 rounded-full`}>
                <Image className="" src={require("@/public/images/icons/policy02.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Bảo đảm chất lượng</h5>
              <p className="text-center mt-4 text-xs-custom">
                Tất cả các sản phẩm tại nhunghuoutramnhan.com cung cấp đều đảm bảo chất lượng khi đến tay người tiêu
                dùng.
              </p>
            </li>
            <li className={`${styles.commit_item} mb-4 inline-block border-gray p-4`}>
              <div className={`${styles.commit_image_wrapper} w-20 ml-auto mr-auto policy_icon my-4 rounded-full`}>
                <Image src={require("@/public/images/icons/policy03.png")} alt="" />
              </div>
              <h5 className="text-center capitalize font-bold text-sm-custom">Nguồn gốc uy tín</h5>
              <p className="text-center mt-4 text-xs-custom">
                Chúng tôi chỉ bán sản phẩm chất lượng, nói không với hàng giả, hàng kém chất lượng
              </p>
            </li>
          </ul>
        </Col>
      </Row>

      {/* reviews and description  */}
      <Row>
        <Col xl={16}></Col>
        <Col xl={8}></Col>
      </Row>
    </Section>
  );
}

export default ProductDetailsLayout;
