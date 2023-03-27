import { Row, Col } from "antd";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CheckoutForm from "@/components/CheckoutForm";
import downloadSvg from "@/public/images/icons/download.svg";
import codSvg from "@/public/images/icons/cod.svg";
import bankSvg from "@/public/images/icons/bank.svg";
import vnpaySvg from "@/public/images/icons/vnpay.svg";
import Section from "@/pages/layouts/Section";
import ButtonSecondary from "@/components/ButtonSecondary";
import nhungHuouSvg from "@/public/images/products/product01.png";
import Button from "@/components/Button";
import styles from "@/styles/CheckoutLayout.module.scss";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

function CheckoutLayout() {
  const router = useRouter();

  const handleCheckout = () => {
    // code
  };

  return (
    <Section>
      <Row gutter={[16, 16]}>
        {/* col left  */}
        <Col xl={14} lg={14} md={24} sm={24} xs={24}>
          {/* heading  */}
          <div className={`${styles.delivery_heading} mb-12`}>
            <h2 className="capitalize text-md-custom">Nhung hươu trầm nhân</h2>
            <Breadcrumb items={[{ title: "Giỏ hàng" }, { title: "Thanh toán đơn hàng" }]} />
          </div>
          {/* end heading  */}
          {/* info  */}
          <div className={`${styles.delivery_info} mb-12`}>
            <p className={styles.delivery_title}>Thông tin giao hàng</p>
            <CheckoutForm />
          </div>
          {/* end info  */}
          {/* delivery method  */}
          <div className={`${styles.delivery_method} mb-12`}>
            <p className={styles.delivery_title}>Phương thức vận chuyển</p>
            <div
              className="py-14 flex flex-col items-center border border-solid border-gray-300"
              style={{ borderRadius: "8px" }}
            >
              <div className="mb-6">
                <Image src={downloadSvg} alt="" />
              </div>

              <p className="text-gray-500 font-light tracking-wide">
                Vui lòng chọn tỉnh/thành để có danh sách vận chuyển
              </p>
            </div>
          </div>
          {/* end delivery method  */}
          {/* checkout method  */}
          <div className={`${styles.checkout_method} mb-16`}>
            <p className={styles.delivery_title}>Phương thức thanh toán</p>
            <ul className={styles.checkout_method_list}>
              <li className={styles.checkout_method_item}>
                <label htmlFor="checkout_method_1" className="flex w-full">
                  <input type="radio" name="checkout_method" id="checkout_method_1" />
                  <div className={styles.checkout_method_img_wrapper}>
                    <Image src={codSvg} alt="" />
                  </div>
                  <p className="text-gray-500 font-light">Thanh toán khi nhận hàng</p>
                </label>
              </li>
              <li className={styles.checkout_method_item}>
                <label htmlFor="checkout_method_2" className="flex w-full">
                  <input type="radio" name="checkout_method" id="checkout_method_2" />
                  <div className={styles.checkout_method_img_wrapper}>
                    <Image src={bankSvg} alt="" />
                  </div>
                  <p className="text-gray-500 font-light">Chuyển khoản qua ngân hàng</p>
                </label>
              </li>
              <li className={styles.checkout_method_item}>
                <div className="text-center text-gray-500 py-2">
                  <p>Khách hàng chuyển khoản qua:</p>
                  <p>Số Tài Khoản: ...</p>
                  <p>Ngân hàng: .... Chi nhánh TP Vinh</p>
                  <p>Chủ tài khoản: Phạm Mạnh Dũng</p>
                </div>
                <div className="text-center text-gray-500 py-2">
                  <p>Khách hàng chuyển khoản qua:</p>
                  <p>Số Tài Khoản: ...</p>
                  <p>Ngân hàng: .... Chi nhánh TP Vinh</p>
                  <p>Chủ tài khoản: Phạm Mạnh Dũng</p>
                </div>
                <div className="text-center text-gray-500 py-2">
                  <p>Nội dung chuyển khoản: Họ và Tên + SĐT đặt hàng.</p>
                  <p>Xong chụp màn hình bill thanh toán gửi qua zalo: 0375.524.580 để shop xác nhận và giao hàng.</p>
                  <p>Cám ơn khách hàng đã tin tưởng và sử dụng sản phẩm tại Nhung Hươu Trầm Nhân</p>
                </div>
              </li>
              <li className={styles.checkout_method_item}>
                <label htmlFor="checkout_method_3" className="flex w-full">
                  <input type="radio" name="checkout_method" id="checkout_method_3" />
                  <div className={styles.checkout_method_img_wrapper}>
                    <Image src={vnpaySvg} alt="" />
                  </div>
                  <p className="text-gray-500 font-light">
                    Thanh toán online {"("}ATM, Visa, MasterCard, JCB, QR Pay trên Mobile Banking{")"}
                  </p>
                </label>
              </li>
            </ul>
          </div>
          {/* end  checkout method  */}
          {/* footer checkout  */}
          <div className={`${styles.checkout_footer} flex justify-between items-center`}>
            <Link className="text-blue-400 tracking-wide" href="/cart">
              Giỏ hàng
            </Link>
            <ButtonSecondary type="fourth" size="md-btn" className="tracking-wide hidden-xs">
              Hoàn tất đơn hàng
            </ButtonSecondary>
          </div>
          {/* end footer checkout  */}
        </Col>

        <Col xl={10} lg={10} md={24} sm={24} xs={24}>
          <ul className="">
            <li className="flex gap-x-8 items-center pb-4 last:border-gray-200 last:border-b">
              <div className="rounded-md relative">
                <div className={`${styles.checkout_wrapper} rounded-lg`}>
                  <Image src={nhungHuouSvg} alt="" />
                </div>
                <span
                  className={`${styles.checkout_count} absolute w-6 h-6 flex items-center justify-center rounded-full  bg-gray-300 z-10`}
                >
                  3
                </span>
              </div>
              <p className="w-230 max-line-two">Nhung hươu tươi thái lát loại 1</p>
              <p>1,650,000₫</p>
            </li>
            <li className="flex gap-x-8 items-center pb-4 last:border-gray-200 last:border-b">
              <div className="rounded-md relative">
                <div className={`${styles.checkout_wrapper} rounded-lg`}>
                  <Image src={nhungHuouSvg} alt="" />
                </div>
                <span
                  className={`${styles.checkout_count} absolute w-6 h-6 flex items-center justify-center rounded-full  bg-gray-300 z-10`}
                >
                  3
                </span>
              </div>
              <p className="w-230 max-line-two">Nhung hươu tươi thái lát loại 2</p>
              <p>1,650,000₫</p>
            </li>
          </ul>

          <form action="" className={`${styles.discount_form} w-full flex gap-x-2 py-4`}>
            <input
              type="text"
              placeholder="- Mã giảm giá -"
              className="border border-gray-200 flex-1 pl-2 rounded-md"
            />
            <Button type="third" size="md-btn">
              Sử dụng
            </Button>
          </form>

          <div className="flex justify-between pb-4 relative before:flex before:content-[''] before:bg-gray-200 before:absolute before:left-0 before:bottom-0 before:w-full before:h-px">
            <span className="text-base tracking-wide">Tạm tính</span>
            <span className="text-lg">6,650,000₫</span>
          </div>

          <div className="flex justify-between pt-4 ">
            <span className="text-lg tracking-wide">Tổng cộng</span>
            <span className="text-2xl">6,650,000₫</span>
          </div>

          <div className="flex md:gap-x-4 md:flex-row flex-col mt-8 gap-y-4">
            <ButtonSecondary
              className="uppercase rounded hidden-lg hidden-xl hidden-xxl"
              type="secondary"
              size="full-btn"
              onClick={() => handleCheckout()}
            >
              Thanh toán ngay
            </ButtonSecondary>
            <ButtonSecondary
              className="uppercase rounded hidden-lg hidden-xl hidden-xxl"
              type="prmary"
              size="full-btn"
              onClick={() => {
                router.push("/");
              }}
            >
              <FaHome /> Về trang chủ
            </ButtonSecondary>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default CheckoutLayout;
