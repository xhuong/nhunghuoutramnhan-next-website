import { Col, Row } from "antd";
import NewsCard from "@/components/NewsCard";
import ProductLabel from "@/components/ProductLabel";
import Section from "@/pages/layouts/Section";
import { globalData } from "@/data";
import styles from "@/styles/News.module.scss";

function News() {
  return (
    <Section>
      <ProductLabel />
      {/* new card list */}
      <div className={styles.section_news_wrapper}>
        <Row gutter={[16, 16]}>
          {globalData.news.data.map((newsItem) => (
            <Col xl={8} md={12} sm={24} xs={24}>
              <NewsCard
                id={newsItem.id}
                author={newsItem.author}
                title={newsItem.blogTitle}
                dayUpload={newsItem.dateUpload}
                comments={newsItem.commentCount}
                imageUrl={newsItem.imageUrl}
                description={newsItem.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
}

export default News;
