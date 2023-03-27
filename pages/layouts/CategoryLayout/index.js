import { Row, Col } from "antd";
import CategorySidebar from "@/components/CategorySidebar";
import Section from "@/pages/layouts/Section";
import SectionProduct from "@/pages/layouts/SectionProduct";
import { globalData } from "@/data";

function CategoryLayout(props) {
  return (
    <Section>
      <Row gutter={[16, 16]}>
        <Col xl={6} lg={6} className="hidden-md hidden-sm hidden-xs">
          <CategorySidebar />
        </Col>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <SectionProduct title={props.title} products={globalData.products.slice(3, 6)} />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayout;
