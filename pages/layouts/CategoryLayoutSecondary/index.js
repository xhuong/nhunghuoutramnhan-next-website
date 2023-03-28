import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CategorySidebar from "@/components/CategorySidebar";
import ListProductName from "@/components/ListProductName";
import PriceRange from "@/components/PriceRange";
import Sort from "@/components/Sort";
import Section from "@/pages/layouts/Section";
import SectionProduct from "@/pages/layouts/SectionProduct";
import { globalData } from "@/data";
import { useEffect, useState } from "react";
import Image from "next/image";

function CategoryLayoutSecondary({ name, ...props }) {
  const [title, setTitle] = useState("");
  const [idCategory, setIdCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const findCategoryName = () => {
    const result = globalData.categories.filter((category) => category.name === name)[0];
    setTitle(result?.categoryName);
  };

  const findIdCategoryByName = () => {
    const result = globalData.categories.filter((category) => category.name === name)[0];
    setIdCategory(result.id);
  };

  const findProductsByCategoryId = () => {
    const result = globalData.products.filter((product) => product.categoryId === idCategory);
    setProducts([...result]);
  };

  useEffect(() => {
    findCategoryName();
  });

  useEffect(() => {
    if (name) {
      findIdCategoryByName();
    }
  }, [name]);

  useEffect(() => {
    if (idCategory) {
      findProductsByCategoryId();
    }
  }, [idCategory]);

  return (
    <Section>
      <Row gutter={16}>
        <Col xl={6} lg={6} className="hidden-xs hidden-sm hidden-md">
          <CategorySidebar name={name} />
          <div className="mt-2">
            <PriceRange />
          </div>
          <div className="banner_wrapper w-full p-4 mt-2  cursor-pointer">
            <Image src={require("@/public/images/banners/banner05.png")} alt="" />
          </div>
        </Col>

        <Col xl={18} lg={18}>
          <ListProductName />
          <h1 className="text-center py-4 text-lg capitalize">Loại sản phẩm: {title}</h1>
          <Sort />
          <SectionProduct title={title} products={products} />
        </Col>
      </Row>
    </Section>
  );
}

export default CategoryLayoutSecondary;
