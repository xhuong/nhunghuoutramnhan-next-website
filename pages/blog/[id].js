import Head from "next/head";
import Header from "@/pages/layouts/Header";
import Footer from "@/pages/layouts/Footer";
import AppActions from "@/components/AppActions";
import AppActionsMobile from "@/components/AppActionsMobile";
import Breadcrumb from "@/components/Breadcrumb";
import BlogLayout from "../layouts/BlogLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { globalData } from "@/data";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [blogItem, setBlogItem] = useState({});

  const handleGetBlogById = (id) => {
    const result = globalData.news.data.filter((blogItem) => blogItem.id === id)[0];
    setBlogItem(result);
  };

  const handleCheckBlogId = (id) => {
    const result = globalData.news.data.some((blogItem) => blogItem.id === id);
    if (!result) {
      router.push("/404");
    } else {
      handleGetBlogById(id);
    }
  };

  useEffect(() => {
    if (id) {
      handleCheckBlogId(Number.parseInt(id));
    }
  }, [id]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>{blogItem.title}</title>
        <meta name="description" content={blogItem.description} />
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta name="keywords" content={blogItem.title} />
        <meta property="og:title" content={blogItem.title} />
        <meta property="og:url" content={`https://nhunghuoutramnhan.com/blog/${blogItem.id}`} />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta property="og:description" content={blogItem.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="pt-4">
          <div className="container">
            <Breadcrumb
              items={[
                { title: "Blog", link: "/blog" },
                { title: `${blogItem.blogTitle}`, link: `blog/${id}` },
              ]}
            />
          </div>
        </div>

        <AppActions />

        <BlogLayout
          id={blogItem.id}
          title={blogItem.blogTitle}
          dateUpload={blogItem.dateUpload}
          imageUrl={blogItem.imageUrl}
          author={blogItem.author}
          commentCount={blogItem.commentCount}
          description={blogItem.description}
        />

        <AppActionsMobile />

        <Footer />
      </main>
    </>
  );
}
