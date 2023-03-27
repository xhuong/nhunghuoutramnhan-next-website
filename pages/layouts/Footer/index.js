import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import styles from "@/styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <h3 className={styles.footer_heading}>Công ty Nhung Hươu Trầm Nhân</h3>
            <ul className={styles.footer_list}>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Hotline {"(24/7)"}:</span>
                <span className={styles.footer_item_phonenumber}>0375.524.580</span> {"( 08:00-21:30 )"}
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Email:</span>
                tramnhanhti123@gmail.com
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Địa chỉ tại HCM:</span>
                205 Nguyễn Thượng Hiền, Phường 6, Quận Bình Thạnh, TPHCM
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Địa chỉ tại Khánh Hoà:</span>
                264 Đường Nguyễn Công Trứ, Mỹ Ca, Cam Ranh
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Thời gian làm việc: </span>
                8h-20h (Thứ 2 đến Chủ Nhật)
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>MST:</span>
                0317411947 do Sở kế hoạch và Đầu tư TPHCM cấp
              </li>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Giấy phép bán lẻ rượu số:</span>
                32/2022/GPR-PKT do UBND Quận Bình Thạnh, Phòng Kinh Tế cấp
              </li>
              <li className={styles.footer_item}>
                <div className={styles.footer_item_contact}>
                  <Link href="/">
                    <span className={styles.footer_item_icon}>
                      <FaFacebookF />
                    </span>
                  </Link>
                  <Link href="/">
                    <span className={styles.footer_item_icon}>
                      <FaYoutube />
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={24}>
            <h3 className={styles.footer_heading}>Danh mục</h3>
            <ul className={styles.footer_list}>
              <li className={styles.footer_item}>
                <Link href="/"> Giới thiệu</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Cao nhung hươu</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Cao huơu</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Cao ban long</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Nhung hươu tươi</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Nhung hươu khô</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Rượu huyết nhung hươu</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Mật ong rừng</Link>
              </li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={24}>
            <h3 className={styles.footer_heading}>Hỗ trợ khách hàng</h3>
            <ul className={styles.footer_list}>
              <li className={styles.footer_item}>
                <Link href="/"> Tin tức</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Liên hệ</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Hướng dẫn mua hàng</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Chính sách giao nhận</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Chính sách đổi trả</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Chính sách bảo mật</Link>
              </li>
              <li className={styles.footer_item}>
                <Link href="/"> Chính sách thanh toán</Link>
              </li>
              <li className={styles.footer_item}>
                <div className={styles.footer_item_image_wrapper}>
                  <Image src={require("@/public/images/bo_cong_thuong.png")} alt="" />
                </div>
              </li>
            </ul>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <h3 className={styles.footer_heading}>Chăm sóc khách hàng</h3>
            <ul className={styles.footer_list}>
              <li className={styles.footer_item}>
                <span className={styles.footer_item_bold}>Hotline:</span>
                0375.524.580
              </li>
              <li>
                <span className={styles.footer_item_bold}>Hỗ trợ thanh toán:</span>
                <Image src={require("@/public/images/checkout/checkout.png")} alt="" />
                <p className={styles.footer_note}>{"(*) Công ty chúng tôi không bán rượu cho người dưới 18 tuổi"}</p>
              </li>
            </ul>
          </Col>
        </Row>
        <p className={styles.footer_license}>
          © Bản quyền thuộc về Công ty Nhung Hươu Trầm Nhân | Sản phẩm chính hãng nhunghuoutramnhan.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
