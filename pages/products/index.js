import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import ProductDetailsLayout from "@/pages/layouts/ProductDetailsLayout";
import { globalData } from "@/data";
import { getNameCredenticalByCategoryName } from "@/utils";
import { useRouter } from "next/router";

function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [dataDetails, setDataDetails] = useState({});
  const [categoryTitle, setCategoryTitle] = useState("");
  const [nameCategoryCredentical, setNameCategoryCredentical] = useState("");

  const findCategoryName = () => {
    const result = globalData.categories.filter((category) => category.id === dataDetails.categoryId);
    setCategoryTitle(result[0]?.categoryName);
  };

  useEffect(() => {
    if (id) {
      const result = globalData.products.filter((product) => product.id === Number.parseInt(id));
      console.log("🚀 ~ file: index.js:24 ~ useEffect ~ result:", result);
      if (result.length > 0) {
        setDataDetails({ ...result[0] });
      }
    }
  }, [id]);

  useEffect(() => {
    if (dataDetails) {
      findCategoryName();
    }
  }, [dataDetails]);

  useEffect(() => {
    if (categoryTitle) {
      const result = getNameCredenticalByCategoryName(globalData.categories, categoryTitle);
      setNameCategoryCredentical(result);
    }
  }, [categoryTitle]);

  return (
    <React.Fragment>
      <Header />
      <div className="pt-4">
        <div className="container">
          <Breadcrumb
            items={[
              { title: `${categoryTitle}`, link: `/categories/${nameCategoryCredentical}` },
              { title: `${dataDetails?.name}` },
            ]}
          />
        </div>
      </div>
      <ProductDetailsLayout data={dataDetails} />
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetailsPage;
