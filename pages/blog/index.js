import Head from "next/head";
import Header from "@/pages/layouts/Header";
import Footer from "@/pages/layouts/Footer";
import AppActions from "@/components/AppActions";
import AppActionsMobile from "@/components/AppActionsMobile";
import BlogLayout from "@/pages/layouts/BlogListLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { globalData } from "@/data";

export default function Blog() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Blog - Nhung Hươu Trầm Nhân</title>
        <meta
          name="description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng. Cửa hàng chúng tôi cam kết nói KHÔNG với hàng giả, hàng nhái, hàng kém chất lượng. Chúng tôi luôn mong muốn đem đến những sản phẩm tốt nhất cho khách hàng."
        />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta name="keywords" content="Nhung hươu, địa chỉ mua nhung hươu tại Hà Nội, địa chỉ mua nhung hươu tại HCM" />
        <meta property="og:title" content="Nhung Hươu Trầm Nhân" />
        <meta property="og:url" content="https://nhunghuoutramnhan.com/blog" />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta
          property="og:description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng. Cửa hàng chúng tôi cam kết nói KHÔNG với hàng giả, hàng nhái, hàng kém chất lượng. Chúng tôi luôn mong muốn đem đến những sản phẩm tốt nhất cho khách hàng."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="pt-4">
          <div className="container">
            <Breadcrumb
              items={[
                { title: "Trang chủ", link: "/" },
                { title: "Trang blog", link: "/blog" },
              ]}
            />
          </div>
        </div>

        <BlogLayout data={globalData.news.data} />

        <AppActions />

        <AppActionsMobile />

        <Footer />
      </main>
    </>
  );
}
