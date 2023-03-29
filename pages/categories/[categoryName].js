import React, { useEffect, useState } from "react";
import Head from "next/head";
import CategoryLayoutSecondary from "@/pages/layouts/CategoryLayoutSecondary";
import AppActionsMobile from "@/components/AppActionsMobile";
import AppActions from "@/components/AppActions";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategoryNameByNameCredentical } from "@/utils";
import { globalData } from "@/data";
import { useRouter } from "next/router";

function CategoryPage() {
  const router = useRouter();
  const { categoryName } = router.query;

  const [nameCategoryCredentical, setNameCategoryCredentical] = useState("");
  const [nameCategory, setNameCategory] = useState("");

  useEffect(() => {
    if (categoryName) {
      setNameCategoryCredentical(categoryName);
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryName) {
      const result = getCategoryNameByNameCredentical(globalData.categories, categoryName);
      setNameCategory(result);
    }
  }, [categoryName]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{nameCategory}</title>
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta
          name="description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={nameCategory} />
        <meta property="og:url" content={`https://nhunghuoutramnhan.com/categories/${nameCategoryCredentical}`} />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta
          property="og:description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta
          name="keywords"
          content="Nhung hươu, nhung hươu tươi, nhung hươu khô, mua nhung hươu ở Hà Nội, mua nhung hươu ở TP HCM, mua nhung hươu"
        />
        <link rel="icon" href="/home.png" />
      </Head>

      <React.Fragment>
        <Header />

        <div className="pt-4">
          <div className="container">
            <Breadcrumb
              items={[
                { title: "Danh mục", link: "/categories/nhung-huou" },
                { title: `${nameCategory}`, link: `/categories/${nameCategoryCredentical}` },
              ]}
            />
          </div>
        </div>

        <CategoryLayoutSecondary name={nameCategoryCredentical} />

        <AppActions />

        <AppActionsMobile />

        <Footer />
      </React.Fragment>
    </>
  );
}
export default CategoryPage;
