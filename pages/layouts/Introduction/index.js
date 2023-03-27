import { Row, Col } from "antd";
import ProductLabel from "@/components/ProductLabel";
import SliderSecondary from "@/components/SliderSecondary";
import Section from "@/pages/layouts/Section";
import Image from "next/image";
import styles from "@/styles/Introduction.module.scss";

function Introduction() {
  return (
    <Section>
      <Row gutter={[8, 16]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProductLabel title="Ý kiến khách hàng" />
          <div className="mt-20">
            <SliderSecondary />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProductLabel title="Giới thiệu công ty" />
          <div className={styles.introduce_image_wrapper}>
            <Image src={require("@/public/images/introduce/company.png")} alt="" />
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Introduction;
