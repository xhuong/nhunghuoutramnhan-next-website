import Head from "next/head";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Banner from "./layouts/Banner";
import Section from "./layouts/Section";
import News from "./layouts/News";
import SectionProduct from "./layouts/SectionProduct";
import BannerSecondary from "./layouts/BannerSecondary";
import AppActions from "@/components/AppActions";
import SimpleSlider from "@/components/Slider";
import AppActionsMobile from "@/components/AppActionsMobile";
import CategoryLayout from "@/pages/layouts/CategoryLayout";
import { globalData } from "@/data";
import Introduction from "./layouts/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nhung Hươu Trầm Nhân</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta
          name="description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu tại Hà Nội và TP.HCM. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nhung Hươu Trầm Nhân" />
        <meta property="og:url" content="https://nhunghuoutramnhan.com/" />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta
          property="og:description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu tại Hà Nội và TP.HCM. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta name="keywords" content="Nhung hươu, nhung hươu, rượu huyết nhung hươu" />
        <link rel="canonical" href="https://nhunghuoutramnhan.com/" />
        <link rel="icon" href="/home.png" />
      </Head>
      <main>
        <Header />

        <SimpleSlider />

        <Banner />

        <CategoryLayout title="Nhung hươu" />

        <Section>
          <SectionProduct title="Sản phẩm bán chạy" products={globalData.products.slice(0, 3)} />
        </Section>

        <BannerSecondary />

        <Section>
          <SectionProduct title="Sản phẩm nổi bật" products={globalData.products.slice(7, 10)} />
        </Section>

        <News />

        <Introduction />

        <AppActions />

        <AppActionsMobile />

        <Footer />
      </main>
    </>
  );
}
