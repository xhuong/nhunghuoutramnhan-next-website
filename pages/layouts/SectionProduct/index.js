import { Row, Col } from "antd";
import Product from "@/components/Product";
import ProductLabel from "@/components/ProductLabel";
import styles from "@/styles/SectionProduct.module.scss";

function SectionProduct({ title, products, ...props }) {
  return (
    <div className={styles.section_product}>
      {/* label product  */}
      <ProductLabel title={title} />
      <div className={styles.section_product_wrapper}>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col xl={8} md={8} sm={12} xs={12} key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                star={product.star}
                categoryId={product.categoryId}
                discount={product.discount}
              />
            </Col>
          ))}
        </Row>
        <p className="text-center py-2 mt-6 text-base rounded text-green-500 bg-green-100">
          Đã hiển thị tất cả 0{products?.length} sản phẩm
        </p>
      </div>
    </div>
  );
}

export default SectionProduct;
