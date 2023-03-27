import { Row, Col } from "antd";
import Image from "next/image";
import styles from "@/styles/Banner.module.scss";

function Banner() {
  return (
    <div className={`${styles.banner} hidden-xs hidden-sm`}>
      <div className="container">
        <Row gutter={12}>
          <Col xl={6} sm={6}>
            <div className={styles.banner_img_wrapper}>
              <Image src={require("@/public/images/banners/banner01.png")} alt="" />
            </div>
          </Col>
          <Col xl={12} sm={12}>
            <div className={styles.banner_img_wrapper}>
              <Image src={require("@/public/images/banners/banner02.png")} alt="" />
            </div>
          </Col>
          <Col xl={6} sm={6}>
            <div className={styles.banner_img_wrapper}>
              <Image src={require("@/public/images/banners/banner03.png")} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Banner;
