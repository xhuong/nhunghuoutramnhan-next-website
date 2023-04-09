import Section from "@/pages/layouts/Section";
import React from "react";
import Image from "next/image";
import ButtonSecondary from "@/components/ButtonSecondary";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Section>
        <div className="mx-auto" style={{ width: "360px", maxWidth: "100%" }}>
          <Image src={require("@/public/images/404.png")} alt="page-error-404" />
        </div>
        <h4 className="font-semibold text-4xl lg:text-8xl text-center md:leading-tight mt-5 sm:text-3xl">
          Trang không tồn tại, vui lòng thử lại sau !
        </h4>
        <p className="font-normal text-xl mt-5 md:text-base text-center">
          Xin lỗi, trang bạn đang yêu cầu có thể chưa hiển thị ngay hoặc trang không tồn tại. Vui lòng trở về trang chủ.
        </p>
        <div className="mx-auto max-w-xs mt-5">
          <ButtonSecondary
            type="secondary"
            size="full-btn"
            boxShadow={true}
            className="text-base rounded"
            onClick={() => {
              router.push("/");
            }}
          >
            <HiHome className="text-base" /> Trở về trang chủ
          </ButtonSecondary>
        </div>
      </Section>
    </React.Fragment>
  );
}
