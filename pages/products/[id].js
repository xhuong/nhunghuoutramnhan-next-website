import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import ProductDetailsLayout from "@/pages/layouts/ProductDetailsLayout";
import { globalData } from "@/data";
import { getNameCredenticalByCategoryName } from "@/utils";
import { useRouter } from "next/router";

function ProductDetailsPage() {
  console.log("go to id page");

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{dataDetails.name}</title>
        <meta name="description" content={dataDetails.description} />
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta name="keywords" content={dataDetails.title} />
        <meta property="og:title" content={dataDetails.title} />
        <meta property="og:url" content={`https://nhunghuoutramnhan.com/blog/${blogItem.id}`} />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta property="og:description" content={dataDetails.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}

export default ProductDetailsPage;
