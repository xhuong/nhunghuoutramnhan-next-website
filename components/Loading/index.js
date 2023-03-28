import { Spin } from "antd";
import { useEffect, useState } from "react";
const { useRouter } = require("next/router");

export default function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <div
      className={`${
        loading ? "translate-y-5" : "-translate-y-full"
      } fixed rounded-lg bg-white shadow-2xl -top-4 z-10 left-1/2 -translate-x-2/4 border-b-4 border-solid border-green-500 transition-transform ease-in-out duration-1000`}
    >
      <p className="px-4 pt-8 pb-4">Đang tải trang, vui lòng chờ trong giây lát...</p>

      <Spin className="w-full text-center" />
    </div>
  );
}
