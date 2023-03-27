import BlogCard from "@/components/BlogCard";
import Section from "@/pages/layouts/Section";
import { Col, Row } from "antd";

export default function BlogListLayout({ data }) {
  return (
    <Section>
      <h1 className="font-bold text-6xl text-center leading-tight mb-16">Blog Nhung Hươu Trầm Nhân</h1>
      <Row gutter={[16, 16]}>
        {data.map((blogItem) => (
          <Col xl={8} lg={8} md={12} sm={12} xs={24}>
            <BlogCard
              id={blogItem.id}
              title={blogItem.title}
              description={blogItem.description}
              imageUrl={blogItem.imageUrl}
              author={blogItem.author}
              dateUpload={blogItem.dateUpload}
            />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
